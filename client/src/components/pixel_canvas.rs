use itertools::Itertools;
use stylist::Style;
use weblog::console_log;
use yew::{classes, html, html_nested, ChildrenWithProps, Component, Context, Html, Properties};

const HORIZONTAL_PIXEL_COUNT: u64 = 64;
const VERTICAL_PIXEL_COUNT: u64 = 64;

pub struct PixelCanvas {
    pixels: ChildrenWithProps<PixelButton>,
    style: Style,
}

impl Component for PixelCanvas {
    type Message = ();
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
            pixels: ChildrenWithProps::new(pixels),
            style,
        }
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div class={classes!("pc-pixel-canvas", self.style.id().to_string())}>
                { for self.pixels.iter() }
            </div>
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
