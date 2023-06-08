// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Styles from "@mui/styles";
import * as JsxRuntime from "react/jsx-runtime";

var useStyles = Styles.makeStyles(function (theme) {
      return {
              alignRight: {
                textAlign: "right",
                width: "100%"
              },
              background: {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white
              }
            };
    });

function ExampleStyles(props) {
  var classes = useStyles(undefined);
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("div", {
                      children: "Example text - aligned to the right",
                      className: classes.alignRight
                    }),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("br", {}),
                JsxRuntime.jsx("div", {
                      children: "Example text on a background coming from the Mui Theme object",
                      className: classes.background
                    })
              ]
            });
}

var make = ExampleStyles;

export {
  useStyles ,
  make ,
}
/* useStyles Not a pure module */
