package pl.lato.views.powitanie;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;
import pl.lato.views.powitanie.PowitanieView.PowitanieViewModel;
import pl.lato.views.main.MainView;
import com.vaadin.flow.router.RouteAlias;

@Route(value = "witaj", layout = MainView.class)
@PageTitle("Powitanie")
@JsModule("./src/views/powitanie/powitanie-view.js")
@Tag("powitanie-view")
@RouteAlias(value = "", layout = MainView.class)
public class PowitanieView extends PolymerTemplate<PowitanieViewModel> {

    // This is the Java companion file of a design
    // You can find the design file in
    // /frontend/src/views/src/views/powitanie/powitanie-view.js
    // The design can be easily edited by using Vaadin Designer
    // (vaadin.com/designer)

    public static interface PowitanieViewModel extends TemplateModel {
    }

    public PowitanieView() {
    }
}
