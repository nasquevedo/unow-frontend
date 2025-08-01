import { DeleteEmployee } from "../../services/DeleteEmployee"
import { GetEmployee } from "../../services/GetEmployee"

const Actions = ({ id, setUser, token }) => {

    const edit = async () => {
        const response = await GetEmployee(id, token)

        if (response) {
            setUser({
                id: response.id,
                email: response.email,
                name: response.name,
                lastName: response.lastName,
                position: response.position,
                birthdate: response.birthdate.date.split(" ")[0]
            })
        }
    }

    const destroy = async () => {
        const response = await DeleteEmployee(id, token)

        if (response) {}
    }

    return (
        <div>
            <i class="bi bi-pencil-fill" onClick={edit}></i>
            <i class="bi bi-trash3-fill" onClick={destroy}></i>
        </div>
    )
}

export default Actions