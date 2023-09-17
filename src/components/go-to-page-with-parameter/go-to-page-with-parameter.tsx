import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function GoToPageWithParameter (props: any) {
  const [parameter, setParameter] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (_e: any) => {
    navigate(`${props.url}/${parameter}`)
  }

  return (
        <div>
            <h3>Ir para pagina com parametro</h3>
            <input type="text"
                value={parameter}
                onChange={(e) => setParameter(e.target.value)}
            />
            <button onClick={() => {
              handleSubmit(parameter)
            }
            }>Ir</button>
        </div>
  )
}
