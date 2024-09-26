import React from 'react'

export function CertificateData(props)
{
    let certificateName = props.certificateName;
    let descriptionData = props.descriptionData;


}
function Certificates() {
  return (
    <div>
        <p>CERTIFICATES</p>
        <CertificateData/>
        </div>
  )
}

export default Certificates