
     const heading = React.createElement("h1",{
        id: "title"
     },"Namaste Namya");

     const heading2 = React.createElement("h2",{
        id: "mitle"
     },"Namaste Namya");

     const container = React.createElement("div",{
        id: "container"
     },[heading2, heading]);
     
     const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(container)
