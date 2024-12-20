import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "tippy.js/dist/tippy.css"
import { mode } from "./modes/lacrosse.js"

window.Drupal = window.Drupal || { 'behaviors': {}, 'empty': true };

  window.Drupal.behaviors.drillMakerScript = {
    attach: function (context, settings) {

      var elements = document.querySelectorAll("div.drill-maker, #drill-maker")
      for (var i = 0; i < elements.length; i++) {
        if (elements.item(i).dataset.drawn) {
          return false;
        }

      (function() {
        var props = elements.item(i).dataset
        ReactDOM.render(
          <React.StrictMode>
            <App
              mode={mode}
              showForm={JSON.parse(props.showForm || "true")}
              showDownloadButtons={JSON.parse(props.showDownloadButtons || "true")}
              showExportImportButtons={JSON.parse(props.showExportImportButtons || "true")}
              formInputClass={props.formInputClass || "form-control"}
              buttonClass={props.buttonClass || "btn btn-primary"}
              onChange={props.onChange ? window[props.onChange] : undefined}
              defaultData={props.defaultData || undefined}
              defaultLogo={props.defaultLogo || undefined}
              promptBeforeUnload={JSON.parse(props.promptBeforeUnload || "true")}
            />
          </React.StrictMode>,
          elements.item(i)
        )
      })()

        elements.item(i).dataset.drawn = true
      }

    }
  }

  if (window.Drupal.empty) {
    window.Drupal.behaviors.drillMakerScript.attach()
  }
