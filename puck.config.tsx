import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: {
    title: string,
    resolvedTitle: string,
  };
  TextBlock: {
    text: string,
    resolvedText: string,
  };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "text",
        },
        resolvedTitle: {
          type: "text",
        },
      },
      resolveData: async ({ props }) => {
        return {
          props: {
            resolvedTitle: props.title,
          },
        };
      },
      render: ({ resolvedTitle }) => {
        return <h1>{resolvedTitle}</h1>;
      },
    },
    TextBlock: {
      fields: {
        text: { type: "text" },
        resolvedText: { type: "text" },
      },
      resolveData: async ({ props }) => {
        return {
          props: {
            resolvedText: props.text
          },

        };
      },
      defaultProps: {
        text: 'test',
        resolvedText: 'test',
      },
      render: ({ resolvedText }) => (
        <div style={{ padding: 64 }}>
          <input type="text" defaultValue={resolvedText}
            className="w-full" />
          <h2>{resolvedText}</h2>
        </div>
      ),
    },
  },
}

