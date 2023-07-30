import { useRef } from "react"

export const HOC = (Component) => {
    /* HOC use to make common section use in all pages
    for that we make HOC function and then make component in that function in which we make common section and another component which show in that part like header or sidebar which show in all page that make and which part change in all page that part we take from component
    if we not make newcomponent in HOC then we can use Component facility like useref , usestate exe..  */
    const NewComponent = () => {
        const reference = useRef()
        return (
            <div className="row m-0 g-0" style={{ height: '100vh' }}>
                <div className="col-2 bg-body-secondary">
                    <h1 className="p-2">Side Bar</h1>
                    <h2><a href="#home">Home</a></h2>
                    <h2><a href="#about">About</a></h2>
                </div>
                <div className="col-10">
                    <header className="bg-info-subtle p-2">
                        <h1 ref={reference}>Header</h1>
                    </header>
                    <Component reference={reference} />
                </div>
            </div>
        )
    }
    return NewComponent
}