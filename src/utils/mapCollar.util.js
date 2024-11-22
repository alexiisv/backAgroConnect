export function mapCollar (data) {
  const mappedCollar = {
    aid_vaca: data.decoded_payload.aid_Vaca,
  
    co2: data.decoded_payload.co2,
    temp: data.decoded_payload.temp,
    hum: data.decoded_payload.hum,

    received_at: data.received_at
  }

  return mappedCollar
}
