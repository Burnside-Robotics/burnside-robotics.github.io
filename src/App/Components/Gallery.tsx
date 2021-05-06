import './Gallery.scss'

type Gallery_Props =
{
    images: string[]
}
export const Gallery = (props: Gallery_Props) =>
{
    return(
        <div className="gallery-body">
            <h2>GALLERY</h2>
        </div>
    );
}