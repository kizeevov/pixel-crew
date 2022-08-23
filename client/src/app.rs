use yew::prelude::*;
use yew_router::prelude::*;

use crate::components::{body::Body, footer::Footer, header::Header};
use crate::routes::{switch, AppRoute};

/// Root app component
#[function_component(App)]
pub fn app() -> Html {
    html! {
        <BrowserRouter>
            // <div class="pc-app">
                <Header />
                // <div class="pc-main">
                //     <article>
                //         <Switch<AppRoute> render={Switch::render(switch)} />
                //     </article>
                // </div>
                    <article>
                        <Switch<AppRoute> render={Switch::render(switch)} />
                    </article>
                <Footer />
            // </div>
        </BrowserRouter>
    }
}
