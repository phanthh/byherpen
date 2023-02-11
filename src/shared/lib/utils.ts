// tagged template that does nothing (for syntax highlighting)
export const gql = (strings: TemplateStringsArray, ...expr: Object[]) =>
	strings.map((s, i) => s + String(expr[i] ?? "")).join("");

export const POST_GRAPHQL_FIELDS = `
slug
title
titleVn
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
contentVn {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
excerpt
excerptVn
coverImage {
  url
}
date
author {
	...on Author {
		name
		picture {
			url
		}
	}
}
`;

export const POST_CARD_GRAPHQL_FIELDS = `
slug
title
titleVn
excerpt
excerptVn
coverImage {
  url
}
date
author {
	...on Author {
		name
		picture {
			url
		}
	}
}
`;
