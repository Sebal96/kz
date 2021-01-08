package pl.lato.views.kalendarz;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;
import pl.lato.views.kalendarz.KalendarzView.KalendarzViewModel;
import pl.lato.views.main.MainView;

@Route(value = "kalendarz", layout = MainView.class)
@PageTitle("Kalendarz")
@JsModule("./src/views/kalendarz/kalendarz-view.js")
@Tag("kalendarz-view")
public class KalendarzView extends PolymerTemplate<KalendarzViewModel> {

    // This is the Java companion file of a design
    // You can find the design file in
    // /frontend/src/views/src/views/kalendarz/kalendarz-view.js
    // The design can be easily edited by using Vaadin Designer
    // (vaadin.com/designer)

    public static interface KalendarzViewModel extends TemplateModel {
    }

    public KalendarzView() {
    }
}
