use gloo_events::EventListener;
use itertools::Itertools;
use stylist::Style;
use web_sys::{window, Element, HtmlElement};
use weblog::console_log;
use yew::{
    classes, events::Event, html, html_nested, ChildrenWithProps, Component, Context, Html,
    NodeRef, Properties,
};

const HORIZONTAL_PIXEL_COUNT: u64 = 64;
const VERTICAL_PIXEL_COUNT: u64 = 64;

pub struct PixelCanvas {
    root_div_ref: NodeRef,
    canvas_div_ref: NodeRef,
    pixels: ChildrenWithProps<PixelButton>,
    style: Style,
    resize_listener: Option<EventListener>,
    width: u32,
    height: u32,
}

pub enum PixelCanvasMessage {
    Resize,
}

impl Component for PixelCanvas {
    type Message = PixelCanvasMessage;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        let pixels = (0..VERTICAL_PIXEL_COUNT)
            .cartesian_product(0..HORIZONTAL_PIXEL_COUNT)
            .map(|(y, x)| {
                html_nested! {
                    <PixelButton position_x={x} position_y={y}/>
                }
            })
            .collect();

        let style = Style::create(
            "pc-pixel-canvas",
            r#"
                grid-template-columns: repeat(64, 1fr);
                grid-template-rows: repeat(64, 1fr);
            "#,
        )
        .expect("");

        Self {
            root_div_ref: Default::default(),
            canvas_div_ref: Default::default(),
            pixels: ChildrenWithProps::new(pixels),
            style,
            resize_listener: None,
            width: 500,
            height: 500,
        }
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            PixelCanvasMessage::Resize => {
                if let Some(element) = self.root_div_ref.cast::<Element>() {
                    let bcr = element.get_bounding_client_rect();
                    console_log!(format!("{:?} {}", bcr.width(), bcr.height()));
                }

                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            <div ref={self.root_div_ref.clone()}>
                <div class={classes!("pc-pixel-canvas", self.style.id().to_string())} ref={self.canvas_div_ref.clone()}>
                    { for self.pixels.iter() }
                </div>
            </div>
        }
    }

    fn rendered(&mut self, ctx: &Context<Self>, first_render: bool) {
        console_log!("rendered");

        if let Some(element) = self.canvas_div_ref.cast::<Element>() {
            element.set_attribute("width", "900px");
        }

        if !first_render {
            return;
        }

        if let Some(element) = window() {
            let onresize = ctx.link().callback(|_: Event| PixelCanvasMessage::Resize);
            let listener =
                EventListener::new(&element, "resize", move |e| onresize.emit(e.clone()));

            self.resize_listener = Some(listener);
        }
    }
}

#[derive(Properties, PartialEq)]
pub struct PixelButtonProperties {
    #[prop_or_default]
    position_x: u64,
    #[prop_or_default]
    position_y: u64,
}

pub enum ButtonMessage {
    Click,
}

struct PixelButton;

impl Component for PixelButton {
    type Message = ButtonMessage;
    type Properties = PixelButtonProperties;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            ButtonMessage::Click => {
                console_log!("clicked", ctx.props().position_x, ctx.props().position_y);
            }
        };
        true
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        let click_callback = ctx.link().callback(|_| ButtonMessage::Click);
        html! {
            <button class="pc-pixel-button" onclick={click_callback}/>
        }
    }
}
