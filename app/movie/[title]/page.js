export default async function MoviePage({params}){
    const {title} = await params
    console.log(title)
    return(
        <div>
            hello
        </div>
    )
}