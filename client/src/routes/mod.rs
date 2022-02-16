use yew::prelude::*;
use yew_router::prelude::*;

pub mod about;
pub mod home;
pub mod draw;

use about::About;
use draw::Draw;

/// App routes
#[derive(Routable, Debug, Clone, PartialEq)]
pub enum AppRoute {
    #[at("/about")]
    About,

    #[at("/draw")]
    Draw,

    #[not_found]
    #[at("/page-not-found")]
    PageNotFound,

    #[at("/")]
    Home,
}

/// Switch app routes
pub fn switch(routes: &AppRoute) -> Html {
    match routes.clone() {
        AppRoute::Home => html! {
            <Redirect<AppRoute> to={AppRoute::Draw}/>
        },
        AppRoute::Draw => html! { <Draw /> },
        AppRoute::About => html! { <About /> },
        AppRoute::PageNotFound => html! { "Page not found" },
    }
}
