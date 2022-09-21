
import demo1_template from "@/config/template/demo1_template.html";
import parse from 'html-react-parser'
import InnerHTML from 'dangerously-set-html-content'
import '@/config/css/demo.css'
import '@/config/css/hl.css'
import DlHighlight from '@/config/js/hl_all'
import IScroll from '@/config/js/iscroll'
import { useEffect } from "react";

export default function IndexPage(props) {
  const demo1_value = require('@/pages' + props.route.path)
  const dom = parse(demo1_value)
  const strTitle = dom[0].props.children;
  const strStyle = dom[2].props.dangerouslySetInnerHTML.__html
  const strDom = demo1_value.slice(demo1_value.indexOf("<div id=\"effect\""), demo1_value.indexOf("<script>"))

  const strScript = demo1_value.slice(demo1_value.indexOf("<script>"))
  const realStyle = dom[2]
  const realDom = dom[4]


  const options = {
    replace: ({ attribs, children }) => {
      if (!attribs) {
        return;
      }

      if (attribs.class === "in-title") {
        return <h1>{strTitle}</h1>;
      }
      if (attribs.class === "in-style") {
        return <style>{realStyle}</style>;
      }
      if (attribs.class === 'csspre') {
        return <pre name="code" className="css">{strStyle}</pre>;
      }
      if (attribs.class === 'script') {

        return <InnerHTML html={strScript}></InnerHTML>
      }
      if (attribs.class === 'jspre') {
        return <pre name="code" className="js">{strScript}</pre>
      }
      if (attribs.class === 'htmlpre') {
        return <pre name="code" className="html">{strDom}</pre>
      }
      if (attribs.id === 'realDom') {

        return realDom
      }
    }
  };
  const all = parse(demo1_template, options)
  // const all = parse(demo1_template)

  useEffect(() => {
    DlHighlight.HELPERS.highlightByName("code", "pre");
  }, [])

  return (
    <div>
      {/* <div dangerouslySetInnerHTML={{ __html: demo1_value }}></div> */}
      {/* <InnerHTML html={html} /> */}
      {/* {dom} */}
      {all}
    </div>
  );
}
