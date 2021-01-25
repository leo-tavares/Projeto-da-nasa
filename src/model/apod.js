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
    this.apod = data || {};
  }

  updateData(data) {
    this.apod = data;
  }

  data() {
    return this.apod;
  }
}

export default Apod;
