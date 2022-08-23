use crate::routes::AppRoute;
use yew::{function_component, html, Html};
use yew_router::prelude::Link;

#[function_component(Header)]
pub fn header() -> Html {
    html! {
        <header>
            <nav class="navbar navbar-light">
                <div class="container">
                    <Link<AppRoute> to={AppRoute::Home} classes="navbar-brand">
                        { "home" }
                    </Link<AppRoute>>
                </div>
            </nav>
        </header>
    }
}
