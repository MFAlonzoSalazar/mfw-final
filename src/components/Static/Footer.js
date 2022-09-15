export default function Footer() {
  return (
    <footer class="d-flex border-top px-5 py-2 justify-content-between align-items-center container-fluid">
      <div class="d-flex pt-2 gap-3 ms-md-4">
        <a href='https://www.instagram.com/fernanda.blaise/' target='_blank' rel="noreferrer">
          <i className="bi bi-instagram fs-4 pink"></i>
        </a>
        <a href='https://www.twitch.tv/redfuryrose' target='_blank' rel="noreferrer">
          <i className="bi bi-twitch fs-4 pink"></i>
        </a>
        <a href='https://github.com/MFAlonzoSalazar' target='_blank' rel="noreferrer">
          <i className="bi bi-github fs-4 pink "></i>
        </a>
        <a href='https://www.linkedin.com/' target='_blank' rel="noreferrer">
          <i className="bi bi-linkedin fs-4 pink"></i>
        </a>
      </div>
      <div class="align-items-center mx-md-3 pink serious intro fw-bold text-end">
        &copy; Fernanda Blaise 2022
      </div>
    </footer>
  );
}
