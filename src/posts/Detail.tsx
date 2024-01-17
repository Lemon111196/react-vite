import { useEffect, useState } from "react"
import { IPost } from "../posts/interface"
import { apiService } from "../services"

export default function Detail() {
    const [detail, setDetail] = useState<IPost[]>([])
    useEffect(() => {
        getPostListDetail()
    }, [])
    const getPostListDetail = async () => {
        try {
            const response = await apiService('/posts')
            if (response.status === 200) {
                setDetail(response.data)
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            {detail.map((item) => (
                <p key={item.id}></p>
            ))}
        </div>
    )
}
