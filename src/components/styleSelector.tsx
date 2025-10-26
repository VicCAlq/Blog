function makeNewLink(style: string, styleClass: string) {
  let newLink = document.createElement('link');
  newLink.rel = 'stylesheet';
  newLink.className = styleClass;
  newLink.href = `src/styles/${style}`
  return newLink;
}

function changeStyle(style: string, styleClass: string) {
  let link = Array.from(document.head.getElementsByClassName(styleClass))[0] as HTMLLinkElement;
  if (!link) { 
    console.log(`Changing style to ${style}...`)
    document.head.appendChild(makeNewLink(style, styleClass)); 
    return
  } 
  if (!(link.href as string).includes(style)) { 
    console.log(`Changing style to ${style}...`)
    document.head.removeChild(link);
    document.head.appendChild(makeNewLink(style, styleClass));
    return
  }
}

export function StyleSelector(props: {styles: string[]}): React.ReactElement {

  const styleClass = 'stylesheet'

  return(
    <select name='style-list' style={{ height: '300px',}} multiple >
      {props.styles.map((style, i) => {
        return <option value={style} key={i} onClick={() => changeStyle(style, styleClass)}>
          {style}
        </option>
      })}
    </select>
  )
}
