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

Query JSON AGG

-> not quite correct, the grouping doesn't work yet!

oriana_catalogue=> SELECT \* FROM editions_composers
oriana_catalogue-> ;
oriana_catalogue=>
oriana_catalogue=> SELECT
id,
article_no,
json_agg(composer_id)
FROM
editions_composers
WHERE
edition_id = 7;
ERROR: column "editions_composers.id" must appear in the GROUP BY clause or be used in an aggregate function
LINE 2: id,
^
oriana_catalogue=> SELECT
id,
article_no,
json_agg(composer_id)
FROM
editions_composers
WHERE
edition_id = 7
GROUP BY
editions_composers.id, editions_composers.article_no;
id | article_no | json_agg
----+------------+----------
3 | OM503 | [1]
4 | OM503 | [2]
5 | OM503 | [3]
6 | OM503 | [21]
7 | OM503 | [30]
8 | OM503 | [31]
(6 rows)

inner join
