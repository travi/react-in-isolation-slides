import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import {Appear, Deck, Fill, Fit, Heading, Image, Layout, Link, List, ListItem, Slide, Text} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';
import 'normalize.css';

const theme = createTheme({
  primary: '#333',
  secondary: '#fff',
  tertiary: '#61dafb'
});

const images = {
  enzyme: require('../assets/react-in-isolation/enzyme.png'),
  unidirectional: require('../assets/react-in-isolation/unidirectional-data-flow.png'),
  userAction: require('../assets/react-in-isolation/flux-client-action.png')
};
preloader(images);

const avatarSize = 250;
const innerListStyle = {marginLeft: 60};

export default function Presentation() {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide
        transition={['zoom']}
        bgDarken={0.75}
        bgImage={require('../assets/react-in-isolation/react-logo.svg')}
      >
        <Heading size={1} fit caps>
          Learn React
        </Heading>
        <Heading size={2} fit caps>
          in Isolation
        </Heading>

        <Text textColor="#888" textSize="1em" margin="40px 0px 0px" bold>
          Matt Travi
        </Text>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
          Less of an intro to React
        </Heading>
        <Heading size={2} fit>
          Instead, how to learn React
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2} fit>
          React, by itself, can be simple
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2} fit>
          That simplicity is clouded in an application
        </Heading>
      </Slide>

      <Slide notes="Transpilation, Bundling for the Browser, Auto rebuild when developing, Hot-reload">
        <Heading size={2} fit>
          Build Tools
        </Heading>
      </Slide>

      <Slide notes="Loading data to the browser, State management, Routing, SSR">
        <Heading size={2} fit>
          Application Wiring
        </Heading>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
          How can we isolate React
        </Heading>
        <Heading size={2} fit>
          to learn it without the distractions?
        </Heading>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1}>
          Hello World
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/create-element-hello-world.example')}
        ranges={[
          {
            loc: [2, 9],
            note: 'JavaScript component',
            title: 'createElement'
          }
        ]}
      />

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/jsx-hello-world.example')}
        ranges={[
          {
            loc: [2, 5],
            title: 'JSX'
          }
        ]}
      />

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/string-hello-world.example')}
        ranges={[
          {
            loc: [0, 3],
            note: 'Strings can now be rendered directly',
            title: 'React 16'
          }
        ]}
      />

      <Slide transition={['zoom']}>
        <Heading size={2} fit>
          Unit Tests
        </Heading>
      </Slide>

      <Slide>
        <Layout>
          <Fill>
            <Image width="70%" src={require('../assets/react-in-isolation/airbnb.svg')} />
            <Appear>
              <div>
                <Link href="https://mochajs.org/" target="_blank">
                  <Image width="70%" src={require('../assets/react-in-isolation/mocha.svg')} />
                </Link>
              </div>
            </Appear>
          </Fill>
          <Fill>
            <Link href="http://airbnb.io/enzyme/" target="_blank">
              <Image width="70%" src={images.enzyme.replace('/', '')} />
            </Link>
            <Appear>
              <div>
                <Link href="http://chaijs.com/" target="_blank">
                  <Image width="60%" src={require('../assets/react-in-isolation/chai.svg')} />
                </Link>
              </div>
            </Appear>
          </Fill>
        </Layout>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/hello-world-test.example')}
        ranges={[
          {
            loc: [1, 2],
            title: 'Unit Testing with Enzyme',
            note: 'enzyme simplifies testing components'
          },
          {
            loc: [7, 10],
            title: 'Unit Testing with Enzyme',
            note: 'render the component with shallow()'
          },
          {
            loc: [11, 15],
            title: 'Unit Testing with Enzyme',
            note: 'verify the behavior'
          }
        ]}
      />

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
          But what do I do with these components
        </Heading>
        <Heading size={2} fit>
          without an application?
        </Heading>
      </Slide>

      <Slide transition={['zoom']}>
        <Link href="https://storybook.js.org/" target="_blank">
          <Image width="80%" src={require('../assets/react-in-isolation/storybook.svg')} />
        </Link>
      </Slide>

      <Slide>
        <Heading size={2} fit>
          Build Details Handled by Storybook
        </Heading>

        <List>
          <ListItem>
            Transpilation (Babel)
          </ListItem>
          <ListItem>
            Bundling for the browser (Webpack)
            <List style={innerListStyle}>
              <ListItem>
                Dev Server
              </ListItem>
              <ListItem>
                Hot Reload
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/hello-world-stories.example')}
        ranges={[
          {
            loc: [2, 5],
            note: 'import the components',
            title: 'Stories'
          },
          {
            loc: [6, 7],
            note: 'Define the category',
            title: 'Stories'
          },
          {
            loc: [7, 10],
            note: 'Render the stories',
            title: 'Stories'
          }
        ]}
      />

      <Slide>
        <Link
          href="https://webgeeks-dec-2018--react-in-isolation-demo.netlify.com/?selectedKind=Functional"
          target="_blank"
        >
          <Heading size={2}>
            Demo
          </Heading>
        </Link>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
          Props
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/props.example')}
        ranges={[
          {
            loc: [8, 11],
            note: 'variable passed as a prop',
            title: 'Props'
          },
          {
            loc: [5, 6],
            note: 'variable passed as a prop',
            title: 'Props'
          },
          {
            loc: [11, 18],
            note: 'booleans can be passed as a flag',
            title: 'Props'
          },
          {
            loc: [15, 16],
            note: 'booleans can be passed as a flag',
            title: 'Props'
          }
        ]}
      />

      <Slide>
        <Link
          href="https://webgeeks-dec-2018--react-in-isolation-demo.netlify.com/?selectedKind=Props%2FButton"
          target="_blank"
        >
          <Heading size={2}>
            Demo
          </Heading>
        </Link>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/handlers.example')}
        ranges={[
          {
            loc: [8, 15],
            note: 'functions passed as props',
            title: 'Handlers'
          },
          {
            loc: [12, 13],
            note: 'functions passed as props',
            title: 'Handlers'
          }
        ]}
      />

      <Slide>
        <Link
          href="https://webgeeks-dec-2018--react-in-isolation-demo.netlify.com/?selectedKind=Handlers%2FButton"
          target="_blank"
        >
          <Heading size={2}>
            Demo
          </Heading>
        </Link>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1}>
          Encapsulation
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/button.example')}
        ranges={[
          {
            loc: [2, 7],
            note: 'props',
            title: 'Button Component'
          },
          {
            loc: [17, 18],
            note: 'label prop',
            title: 'Button Component'
          },
          {
            loc: [9, 10],
            note: 'disabled prop',
            title: 'Button Component'
          },
          {
            loc: [15, 16],
            note: 'click handler',
            title: 'Button Component'
          },
          {
            loc: [10, 15],
            note: 'also leverage `disabled` to determine cursor',
            title: 'Button Component'
          }
        ]}
      />

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/props.example')}
        ranges={[
          {
            loc: [18, 21],
            note: 'variable passed as a prop',
            title: 'Props'
          },
          {
            loc: [21, 24],
            note: 'booleans can be passed as a flag',
            title: 'Props'
          }
        ]}
      />

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/handlers.example')}
        ranges={[
          {
            loc: [22, 28],
            note: 'functions passed as props',
            title: 'Handlers'
          },
          {
            loc: [25, 26],
            note: 'functions passed as props',
            title: 'Handlers'
          }
        ]}
      />

      <Slide transition={['zoom']}>
        <Heading size={2} fit>
          Unit Tests
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/button-test.example')}
        ranges={[
          {
            loc: [13, 20],
            title: 'Unit Testing with Enzyme',
            note: 'pass props to the button'
          },
          {
            loc: [20, 21],
            title: 'Unit Testing with Enzyme',
            note: 'select the DOM <button/> within the wrapper'
          },
          {
            loc: [21, 31],
            title: 'Unit Testing with Enzyme',
            note: 'verify that the props were passed down to the <button/>'
          },
          {
            loc: [42, 46],
            title: 'Unit Testing with Enzyme',
            note: 'verify that the pointer is used as the cursor when the button is enabled'
          },
          {
            loc: [34, 40],
            title: 'Unit Testing with Enzyme',
            note: 'being explicit about boolean flags (especially when false) helps clarify the intent of the test'
          },
          {
            loc: [57, 61],
            title: 'Unit Testing with Enzyme',
            note: 'verify that not-allowed is used as the cursor when the button is enabled'
          },
          {
            loc: [49, 55],
            title: 'Unit Testing with Enzyme',
            note: 'being explicit about boolean flags (even when true) helps clarify the intent of the test'
          }
        ]}
      />

      <Slide>
        <Link
          href="https://webgeeks-dec-2018--react-in-isolation-demo.netlify.com/?selectedKind=Handlers%2FButton"
          target="_blank"
        >
          <Heading size={2}>
            Demo
          </Heading>
        </Link>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
          Flux
        </Heading>
      </Slide>

      <Slide>
        <Heading size={2} fit>
          Unidirectional Data Flow
        </Heading>

        <Image src={images.unidirectional.replace('/', '')} />
      </Slide>

      <Slide>
        <Heading size={2} fit>
          User Action
        </Heading>

        <Image src={images.userAction.replace('/', '')} />
      </Slide>

      <Slide>
        <Heading size={2} fit>
          Functional Component
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/jsx-hello-world.example')}
        ranges={[
          {
            loc: [2, 5],
            title: 'Functional Component',
            note: 'the entire component is just a function call'
          }
        ]}
      />

      <Slide>
        <Heading size={2} fit>
          Container Component
        </Heading>

        <List>
          <Appear>
            <ListItem>
              State
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Lifecycle Hooks
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Instance Methods
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/simple-container.example')}
        ranges={[
          {
            loc: [1, 8],
            title: 'Container Component',
            note: 'maintains an instance'
          }
        ]}
      />

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
          State
        </Heading>

        <List>
          <Appear>
            <ListItem>
              Application
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Component
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide>
        <Heading size={2} fit>
          Controlled Input
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/controlled-input-stories.example')}
        ranges={[
          {
            loc: [9, 12],
            title: 'Controlled Input',
            note: 'when `value` is set, only React can change the value'
          },
          {
            loc: [12, 15],
            title: 'Controlled Input',
            note: 'when `value` is set, only React can change the value'
          },
          {
            loc: [6, 9],
            title: 'Controlled Input',
            note: 'when `value` is not set, React is not controlling the state of the input'
          }
        ]}
      />

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/controlled-input.example')}
        ranges={[
          {
            loc: [2, 3],
            title: 'Container Component',
            note: 'an instance needs to be created to maintain state'
          },
          {
            loc: [12, 21],
            title: 'Container Component',
            note: 'the `render` function serves the same purpose as a functional component, but has privileged ' +
              'access to instance properties'
          },
          {
            loc: [16, 17],
            title: 'Container Component',
            note: 'the `value` is controlled using state'
          },
          {
            loc: [3, 4],
            title: 'Container Component',
            note: 'state of `value` is initialized to an empty string. this could be initialized to a prop value'
          },
          {
            loc: [5, 11],
            title: 'Container Component',
            note: 'the handler passed as `onChange` to the DOM element updates the internal component state'
          },
          {
            loc: [17, 18],
            title: 'Container Component',
            note: 'the change-handler is passed to `onChange`'
          }
        ]}
      />

      <Slide transition={['zoom']}>
        <Heading size={2} fit>
          Unit Tests
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/input-test.example')}
        ranges={[
          {
            loc: [9, 10],
            title: 'Unit Testing with Enzyme',
            note: 'render the <Input />'
          },
          {
            loc: [10, 14],
            title: 'Unit Testing with Enzyme',
            note: 'verify that the type is set correctly and that the value defaults to empty'
          },
          {
            loc: [22, 26],
            title: 'Unit Testing with Enzyme',
            note: 'simulate a value change'
          },
          {
            loc: [27, 31],
            title: 'Unit Testing with Enzyme',
            note: 'verify that the state was updated and flows down to the <input />'
          },
          {
            loc: [37, 40],
            title: 'Unit Testing with Enzyme',
            note: 'provide an external change handler'
          },
          {
            loc: [41, 48],
            title: 'Unit Testing with Enzyme',
            note: 'simulate a value change'
          },
          {
            loc: [49, 55],
            title: 'Unit Testing with Enzyme',
            note: 'being explicit about boolean flags (even when true) helps clarify the intent of the test'
          }
        ]}
      />

      <Slide>
        <Link
          href="https://webgeeks-dec-2018--react-in-isolation-demo.netlify.com/?selectedKind=Inputs"
          target="_blank"
        >
          <Heading size={2}>
            Demo
          </Heading>
        </Link>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
          Navigation
        </Heading>
      </Slide>

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/navigation.example')}
        ranges={[
          {
            loc: [2, 3],
            title: 'Navigation with linkTo',
            note: 'import the linkTo function'
          },
          {
            loc: [17, 27],
            title: 'Navigation with linkTo',
            note: 'define onClick handlers to navigate'
          },
          {
            loc: [19, 23],
            title: 'Navigation with linkTo',
            note: 'define onClick handlers to navigate'
          },
          {
            loc: [33, 37],
            title: 'Navigation with linkTo',
            note: 'define onClick handlers to navigate'
          },
          {
            loc: [43, 47],
            title: 'Navigation with linkTo',
            note: 'define onClick handlers to navigate'
          },
          {
            loc: [57, 61],
            title: 'Navigation with linkTo',
            note: 'define onClick handlers to navigate'
          },
          {
            loc: [20, 21],
            title: 'Navigation with linkTo',
            note: 'define the category that you want to navigate to'
          },
          {
            loc: [13, 14],
            title: 'Navigation with linkTo',
            note: 'define the category that you want to navigate to'
          },
          {
            loc: [21, 22],
            title: 'Navigation with linkTo',
            note: 'and the story name'
          },
          {
            loc: [29, 30],
            title: 'Navigation with linkTo',
            note: 'and the story name'
          }
        ]}
      />

      <CodeSlide
        lang="jsx"
        code={require('../assets/react-in-isolation/navigation.example')}
        ranges={[
          {
            loc: [4, 5],
            title: 'Navigation with storybook-router',
            note: 'import the storybook-router'
          },
          {
            loc: [84, 90],
            title: 'Navigation with storybook-router',
            note: 'define <Link>s to navigate'
          },
          {
            loc: [90, 98],
            title: 'Navigation with storybook-router',
            note: 'define <Link>s to navigate'
          },
          {
            loc: [98, 106],
            title: 'Navigation with storybook-router',
            note: 'define <Link>s to navigate'
          },
          {
            loc: [70, 71],
            title: 'Navigation with storybook-router',
            note: 'add a decorator to define routes. storybook decorators are applied to each story'
          },
          {
            loc: [71, 75],
            title: 'Navigation with storybook-router',
            note: 'map each route to a linkTo function'
          },
          {
            loc: [75, 79],
            title: 'Navigation with storybook-router',
            note: 'map each route to a linkTo function'
          },
          {
            loc: [79, 83],
            title: 'Navigation with storybook-router',
            note: 'map each route to a linkTo function'
          }
        ]}
      />

      <Slide>
        <Link
          href="https://webgeeks-dec-2018--react-in-isolation-demo.netlify.com/?selectedKind=Navigation%2FPagination%2FlinkTo" // eslint-disable-line max-len
          target="_blank"
        >
          <Heading size={2}>
            Demo
          </Heading>
        </Link>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
          Next Steps
        </Heading>

        <List>
          <Appear>
            <ListItem>
              <Link
                href="https://storybook.js.org/addons/addon-gallery/"
                target="_blank"
                textColor="#888"
              >
                Storybook Plugins
              </Link>

              <List style={innerListStyle}>
                <ListItem>
                  <Link
                    href="https://github.com/storybooks/storybook/tree/master/addons/knobs"
                    target="_blank"
                    textColor="#888"
                  >
                    Knobs
                  </Link>
                  {' - '}
                  <Link
                    href="https://www.youtube.com/watch?v=kopW6vzs9dg&feature=youtu.be"
                    target="_blank"
                    textColor="#888"
                  >
                    Demo Video
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://github.com/mthuret/storybook-addon-specifications"
                    target="_blank"
                    textColor="#888"
                  >
                    Specifications Addon
                  </Link>
                </ListItem>
              </List>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link
                href="https://medium.com/@mtiller/testing-react-components-using-storybook-and-cypress-1689a27f55aa"
                target="_blank"
                textColor="#888"
              >
                Cypress
              </Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href="https://facebook.github.io/create-react-app/" target="_blank" textColor="#888">
                Create React App
              </Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href="https://presentations.travi.org/component-library/" target="_blank" textColor="#888">
                Build an Interactive Component Library
              </Link>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide transition={['zoom']}>
        <Heading size={1} fit>
          Matt Travi
        </Heading>

        <Layout>
          <Fit style={{paddingRight: 30}}>
            <Image
              style={{border: '10px solid #e5e5e5', maxWidth: avatarSize}}
              src={`https://secure.gravatar.com/avatar/552ffda146c8a19730e4e9a27dafb749?size=${avatarSize}`}
            />
          </Fit>
          <Fill>
            <List>
              <ListItem>
                <Link textColor="#888" target="_blank" href="https://matt.travi.org">
                  matt.travi.org
                </Link>
              </ListItem>
              <ListItem>
                <Link textColor="#888" target="_blank" href="https://twitter.com/mtravi">
                  twitter.com/mtravi
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  textColor="#888"
                  target="_blank"
                  href="https://github.com/travi/react-in-isolation/tree/webgeeks-dec-2018"
                >
                  github.com/travi/react-in-isolation
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  textColor="#888"
                  target="_blank"
                  href="https://react-in-isolation.travi.org"
                >
                  react-in-isolation.travi.org
                </Link>
              </ListItem>
            </List>
          </Fill>
        </Layout>
      </Slide>

    </Deck>
  );
}

Presentation.displayName = 'Presentation';
