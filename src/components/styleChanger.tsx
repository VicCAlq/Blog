export function StyleChanger(props: {style: string}): React.ReactElement {

  const asset = props.style;
  const styleClass = 'stylesheet'

  function changeStyle() {
    console.log(`Changing style to ${props.style}...`)
    let link = Array.from(document.head.getElementsByClassName(styleClass))[0]
    let newLink = document.createElement('link')
    newLink.rel = 'stylesheet';
    newLink.className = styleClass;
    newLink.href = `src/styles/${asset}`
    if (!link) { 
      document.head.appendChild(newLink); 
    } else { 
      document.head.removeChild(link);
      document.head.appendChild(newLink);
    }
  }

  return(
    <button onClick={changeStyle}>Set {asset} as style</button>
  )
}
