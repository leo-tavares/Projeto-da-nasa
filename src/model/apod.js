/**
 * {
    copyright,
    date,
    explanation,
    hdurl,
    media_type,
    service_version,
    title,
    url,
  }
 */

class Apod {
  constructor(data) {
    this._apod = data || {};
  }

  updateData(data) {
    this._apod = data;
  }

  getData() {
    return this._apod;
  }
}

export default Apod;
