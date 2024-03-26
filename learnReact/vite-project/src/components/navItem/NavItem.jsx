
function NavItem() {
    const divs = [];

    for (let i = 0; i < 5; i++) {
        divs.push(<div key={i} className="NavItem"></div>);
    }

    return (
        <div>
            {divs}
        </div>
    );
}

export default NavItem
