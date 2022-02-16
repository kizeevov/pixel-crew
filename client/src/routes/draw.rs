use yew::prelude::*;

use crate::components::pixel_canvas::PixelCanvas;

/// Draw page
#[function_component(Draw)]
pub fn draw() -> Html {
    html! {
        <div class="pc-div-canvas">
            <PixelCanvas/>
        </div>
    }
}