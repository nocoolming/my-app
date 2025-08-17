import type { Config, Content, Slot } from "@measured/puck";

type Props = {
  HeadingBlock: {
    title: string,
    resolvedTitle: string,
  };
  TextBlock: {
    text: string,
    resolvedText: string,
  };
  Example: {
    content: Slot,
  },
  Card: {

  },
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
          readOnly: {
            resolvedText: true,
          }
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
    Example: {
      fields: {
        content: {
          type: 'slot',
          allow: ['HeadingBlock', 'TextBlock', 'Card'],
        },
      },
      resolveData: async ({ props }) => {
        console.log(JSON.stringify(props));

        return { props }
      },
      render: ({ content: Content }) => {
        return(
           <Content className="min-w-full min-h-64"/>

          );
      },

    },
    Card: {
      render: () => <div>Hello, world</div>
    }
  },
}

