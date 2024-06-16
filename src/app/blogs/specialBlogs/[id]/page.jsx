const SingleSpecialBlogPage = ({ params }) => {
   console.log(params.id);
   const singleBlog = blogs.find((blog) => blog.id == params.id);

   return (
      <div className="space-y-4">
         <h2 className="text-center text-2xl">
            Special Blog ID: {singleBlog.id}
         </h2>

         <h4>Title: {singleBlog.name}</h4>
         <h4>Description: {singleBlog.description}</h4>
      </div>
   );
};

export default SingleSpecialBlogPage;

const blogs = [
   {
      id: 1,
      name: "Voluptatem dolore natus",
      description:
         "Quam sit est occaecati repudiandae repellendus rerum et. Quibusdam non ratione doloremque fugiat. Sed officiis atque et non enim. Quae ratione et libero dolore officia. Odit dolorem tempora non qui minus.",
   },
   {
      id: 2,
      name: "Reprehenderit inventore eius",
      description:
         "Et accusamus architecto mollitia. Nemo sed officiis non libero dignissimos ea vel. Alias voluptatem ut in iusto ut et laborum dignissimos. Est quidem enim blanditiis sit sed fugiat repellat.",
   },
   {
      id: 3,
      name: "Qui autem facilis",
      description:
         "Recusandae qui qui eveniet. Quis consequatur nihil molestias illum sequi. Quia cum ut tempore dolorem quis dolorem est. Aspernatur ab ad nulla ut iusto et.",
   },
   {
      id: 4,
      name: "Est a rem",
      description:
         "Magnam ullam est non. Eos voluptatibus iure deleniti reprehenderit. Dolorum dolor vero autem et et. Temporibus quisquam voluptatem possimus quis veniam quis.",
   },
   {
      id: 5,
      name: "Autem similique maiores",
      description:
         "Aut voluptas vitae molestiae repudiandae quae. Assumenda ad porro et ut. Eos nostrum assumenda sunt est. Qui necessitatibus qui asperiores a nemo molestiae atque.",
   },
];
