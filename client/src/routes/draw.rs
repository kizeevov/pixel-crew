use yew::prelude::*;

use crate::components::pixel_canvas::PixelCanvas;

const HORIZONTAL_PIXEL_COUNT: u64 = 64;
const VERTICAL_PIXEL_COUNT: u64 = 64;

/// Draw page
#[function_component(Draw)]
pub fn draw() -> Html {
    html! {
        <PixelCanvas horizontal_pixel_count={HORIZONTAL_PIXEL_COUNT} vertical_pixel_count={VERTICAL_PIXEL_COUNT}/>
    }
}
