import aboutImg from "../../assets/images/home/12.jpg";

export function AboutPage() {
  return (
    <>
      <section className="section" id="about">
        <div className="container grid">
          <div className="image image_about">
            <img src={aboutImg} alt="business meeting with all members teams" />
          </div>
          <div className="text text_about">
            <h2 className="title">Quem Somos</h2>
            <ul>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae{" "}
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae​
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat culpa laboriosam nemo, placeat iste est qui rerum
                  autem distinctio maiores ad similique id nobis itaque maxime?
                  A, eum. Non, hic!
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
