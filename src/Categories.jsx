import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Categories({ setCategory }) {
    const [cat, setCat] = useState({})

    useEffect(() => {
        fetch('https://jbh-mockserver.onrender.com/categories')
            .then(j => j.json() )
            .then(res=>setCat(res))
    }, [])

    return (
        <div>
            {Object.keys(cat).map(c => <Link to=
            {"/categories/"+c}><img className="img" src={cat[c]}/>
            </Link>)}
        </div>
    )
}
