import type { pages } from "@/templates/pages";

import { FeatureCard } from "./FeatureCard";

type IFeatureGridProps = {
  title?: string;
  description?: string;
  features: Array<{
    pageId?: keyof typeof pages;
    title?: string;
    description: string;
    image?: string | [string, string];
  }>;
};

const FeatureGrid = ({ title, description, features }: IFeatureGridProps) => (
  <div className="py-16">
    {(title || description) && (
      <div className="mb-12 text-center">
        {title && (
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h2>
        )}
        {description && (
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            {description}
          </p>
        )}
      </div>
    )}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  </div>
);

export { FeatureGrid };
