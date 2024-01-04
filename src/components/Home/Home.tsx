import "./Home.css";
import Blog from "../Blog/Blog";

function validateTitle(blogTitle: string): {
  truncatedTitle: string;
  titleArray: string[];
} {
  let truncatedTitle: string = "";
  let titleArray: string[] = [];

  if (blogTitle.split(" ").length <= 5) {
    truncatedTitle = blogTitle;
    titleArray = blogTitle.split(" ");
  } else {
    titleArray = blogTitle.split(" ");
    truncatedTitle =
      titleArray.slice(0, 5).join(" ") + "\n" + titleArray.slice(5).join(" ");
  }

  return { truncatedTitle, titleArray };
}

const blogs = [
  {
    title: validateTitle("Reason Behind Next Js's Rapid Growth"),
    description: "description",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg",
  },
];

export default function Home() {
  return (
    <main>
      <div className="row bs" style={{ marginTop: "10px", marginLeft: "10px" }}>
        {blogs.map((blog, index) => (
          <div className="col" key={index}>
            <Blog blogObject={blog} />
          </div>
        ))}
      </div>
    </main>
  );
}
