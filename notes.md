- form action
- ich drücke den button
- item wird aus dem cookie gelöscht
- cookie: id & quantity
-

# Remove button

1. get the cookie
2. parse the cookie
3. filter items without the id to be deleted
4. set cookie

# Checkout delete cookie

- needs to delete the complete cookie!

# Link in button

https://nextjs.org/docs/pages/api-reference/functions/use-router

```

import { useRouter } from 'next/router'

export default function ActiveLink({ children, href }) {
const router = useRouter()
const style = {
marginRight: 10,
color: router.asPath === href ? 'red' : 'black',
}

const handleClick = (e) => {
e.preventDefault()
router.push(href)
}

return (
<a href={href} onClick={handleClick} style={style}>
{children}
</a>
)
}
```
