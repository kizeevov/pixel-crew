use crate::routes::{switch, AppRoute};
use yew::{function_component, html, Html};
use yew_router::Switch;

#[function_component(Body)]
pub fn header() -> Html {
    html! {
        <div class="body">
            <div class="pc-app">
                <div class="pc-main">
                    <article>
                        <Switch<AppRoute> render={Switch::render(switch)} />
                    </article>
                </div>
            </div>
        </div>
    }
}
