use gloo_events::EventListener;
use itertools::Itertools;
use std::cmp::min;
use stylist::Style;
use web_sys::{window, Element, HtmlElement};
use weblog::console_log;
use yew::{
    classes, events::Event, html, html_nested, ChildrenWithProps, Component, Context, Html,
    NodeRef, Properties,
};

pub struct PixelCanvas {
    root_div_ref: NodeRef,
    canvas_div_ref: NodeRef,
    pixels: ChildrenWithProps<PixelButton>,
    style: Style,
    resize_listener: Option<EventListener>,
    width: f64,
    height: f64,
}

impl PixelCanvas {
    fn resize(&mut self) {
        if let Some(element) = self.root_div_ref.cast::<Element>() {
            let bcr = element.get_bounding_client_rect();
            let size = bcr.height().min(bcr.width());

            self.height = size;
            self.width = size;
        }
    }
}

pub enum PixelCanvasMessage {
    Resize,
}

#[derive(Properties, PartialEq)]
pub struct PixelCanvasProperties {
    #[prop_or(64)]
    pub horizontal_pixel_count: u64,
    #[prop_or(64)]
    pub vertical_pixel_count: u64,
}

impl Component for PixelCanvas {
    type Message = PixelCanvasMessage;
    type Properties = PixelCanvasProperties;

    fn create(ctx: &Context<Self>) -> Self {
        let horizontal_pixel_count = ctx.props().horizontal_pixel_count;
        let vertical_pixel_count = ctx.props().vertical_pixel_count;

        let pixels = (0..vertical_pixel_count)
            .cartesian_product(0..horizontal_pixel_count)
            .map(|(y, x)| {
                html_nested! {
                    <PixelButton position_x={x} position_y={y}/>
                }
            })
            .collect();

        let style = Style::create(
            "pc-pixel-canvas",
            format!(
                r#"
                grid-template-columns: repeat({horizontal_pixel_count}, 1fr);
                grid-template-rows: repeat({vertical_pixel_count}, 1fr);
            "#
            ),
        )
        .expect("");

        Self {
            root_div_ref: Default::default(),
            canvas_div_ref: Default::default(),
            pixels: ChildrenWithProps::new(pixels),
            style,
            resize_listener: None,
            width: 500.0,
            height: 500.0,
        }
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            PixelCanvasMessage::Resize => {
                self.resize();
                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            <div ref={self.root_div_ref.clone()} class="pc-div-canvas">
                <div class={classes!("pc-pixel-canvas", self.style.id().to_string())} ref={self.canvas_div_ref.clone()}>
                    { for self.pixels.iter() }
                </div>
            </div>
        }
    }

    fn rendered(&mut self, ctx: &Context<Self>, first_render: bool) {
        if first_render {
            self.resize();

            if let Some(element) = window() {
                let onresize = ctx.link().callback(|_: Event| PixelCanvasMessage::Resize);
                let listener =
                    EventListener::new(&element, "resize", move |e| onresize.emit(e.clone()));

                self.resize_listener = Some(listener);
            }
        }

        if let Some(element) = self.canvas_div_ref.cast::<Element>() {
            element.set_attribute(
                "style",
                &format!("width:{}px;height:{}px", self.width, self.height),
            );
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
