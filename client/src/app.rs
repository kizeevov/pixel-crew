use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::{switch, AppRoute};

/// Root app component
#[function_component(App)]
pub fn app() -> Html {
    html! {
        <BrowserRouter>
            <div class="pc-app">
              <div class="pc-main">
                <article>
                  <Switch<AppRoute> render={Switch::render(switch)} />
                </article>
              </div>
              <footer/>
            </div>
        </BrowserRouter>
    }
}
