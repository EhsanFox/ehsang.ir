import React from 'react'
import Typed from 'typed.js'
import { Twemoji } from './Twemoji'

export function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">Exxon/Ehsan</b> at work.
        </li>
        <li>I'm a self-thought open-source contributor and developer.</li>
        <li>
          I live in <b className="font-medium">Mashhad, Iran</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">PHP</b>.
        </li>
        <li>I love web development.</li>
        <li>I'm focusing on building practical softwares.</li>
        <li>I work mostly with Node/TypeScript and React.</li>
        <li>
          I'm a dog person <Twemoji emoji="dog" />.
        </li>
        <li>
          I'm a sport-guy. I love
          <span className="ml-1">
            <Twemoji emoji="ping-pong" />
          </span>
          .
        </li>
        <li>I love pop music.</li>
        <li>
          I love playing video game <Twemoji emoji="video-game" />, LoL is my favorite one.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
