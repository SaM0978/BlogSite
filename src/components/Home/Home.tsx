import "./Home.css";
import Blog from "../Blog/Blog";

function validateTitle(blogTitle: string) {
  const MAX_LENGTH = 29;
  console.log(blogTitle.length);

  if (blogTitle.length > MAX_LENGTH) {
    const truncatedTitle = blogTitle.slice(0, MAX_LENGTH);
    return truncatedTitle;
  } else {
    return blogTitle;
  }
}

function descriptionShorter(description: string) {
  const MAX_LENGTH = 46;
  console.log(description.length);

  if (description.length > MAX_LENGTH) {
    const truncatedDescription = description.slice(0, MAX_LENGTH);
    return truncatedDescription;
  } else {
    return description;
  }
}

const blogs = [
  {
    title: validateTitle("Reason Behind Next Js's Rapid Growth"),
    description: descriptionShorter(
      "Next.js React Features With File-Based Routing With Many Things"
    ),
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg",
  },
  {
    title: validateTitle("Reason Behind Javascript Js's Rapid Decline"),
    description: descriptionShorter("Sun tzu"),
    imageUrl:
      "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg",
  },
  {
    title: validateTitle("Reason Behind Next Js's Rapid Growth"),
    description: descriptionShorter(
      "Next.js React Features With File-Based Routing With Many Things"
    ),
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg",
  },
  {
    title: validateTitle("Reason Behind Next Js's Rapid Growth"),
    description: descriptionShorter(
      "Next.js React Features With File-Based Routing With Many Things"
    ),
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg",
  },
  {
    title: validateTitle("Reason Behind Next Js's Rapid Growth"),
    description: descriptionShorter(
      "Next.js React Features With File-Based Routing With Many Things"
    ),
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg",
  },
];

export default function Home() {
  return (
    <main>
      <div className="" style={{ marginTop: "10px", marginLeft: "10px" }}>
        {blogs.map((blog, index) => (
          <div className="flexing" key={index}>
            <Blog blogObject={blog} />
          </div>
        ))}
      </div>
    </main>
  );
}
