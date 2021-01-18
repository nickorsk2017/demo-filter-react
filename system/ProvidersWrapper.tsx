import {} from "react";

export function ProvidersWrapper(props) {
  const {children} = props;
  return (
    <div style={{height: "100%", width: "100%"}}>
      {children}
    </div>
  );
}