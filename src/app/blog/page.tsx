import Article from "@/modules/blog/componets/article.component";
import Layout from "@/modules/common/layouts/layout";
import React from "react";

export default function BlogPage() {
  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       <Article />
      </section>
    </Layout>
  );
}
