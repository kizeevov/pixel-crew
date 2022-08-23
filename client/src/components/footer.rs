use crate::routes::AppRoute;
use yew::{function_component, html, Html};
use yew_router::prelude::Link;

#[function_component(Footer)]
pub fn footer() -> Html {
    html! {
        <footer>
            <div class="container">
                <Link<AppRoute> to={AppRoute::Home} classes="logo-font">{ "home" }</Link<AppRoute>>
                <span class="attribution">
                </span>
            </div>
        </footer>
    }
}
