import * as React from 'react';
import { Page, Tabs, Card, ResourceList } from '@shopify/polaris';
import * as v4 from 'uuid/v4';

interface Animal {
  readonly id: string;
  readonly type: 'Person' | 'Dog';
  readonly name: string;
  readonly age: number;
}

interface State {
  readonly selectedTabIndex: number;
}

class App extends React.Component<{}, State> {
  state: State = { selectedTabIndex: 0 };

  private onSelectTab = (selectedTabIndex: number) =>
    this.setState((): Partial<State> => ({
      selectedTabIndex
    }));

  private tabLookup = {
    0: () => {
      return <AnimalTab />;
    },
    1: () => {
      return <PeopleTab />;
    }
  };

  public render() {
    return (
      <Page title="Example">
        <Tabs
          selected={this.state.selectedTabIndex}
          onSelect={this.onSelectTab}
          tabs={[
            {
              id: 'animals',
              title: 'Animals'
            },
            {
              id: 'people',
              title: 'People'
            }
          ]}
        >
          {this.tabLookup[this.state.selectedTabIndex]()}
        </Tabs>
      </Page>
    );
  }
}

const AnimalTab = () => (
  <Card>
    <ResourceList
      items={sampleAnimals}
      renderItem={(animal: Animal) => (
        <ResourceList.Item
          attributeOne={animal.name}
          attributeTwo={animal.age}
          attributeThree={animal.type}
          actions={[
            {
              content: 'Action One'
            },
            {
              content: 'Action Two'
            }
          ]}
          persistActions
        />
      )}
    />
  </Card>
);

const PeopleTab = () => (
  <Card>
    <ResourceList
      items={samplePeople}
      renderItem={(person: Animal) => (
        <ResourceList.Item
          attributeOne={person.name}
          attributeTwo={person.age}
          attributeThree={person.type}
          actions={[
            {
              content: 'Action One'
            },
            {
              content: 'Action Two'
            }
          ]}
          persistActions
        />
      )}
    />
  </Card>
);

const samplePeople: Animal[] = [
  {
    id: v4(),
    name: 'Bran',
    age: 16,
    type: 'Person'
  },
  {
    id: v4(),
    name: 'Arya',
    age: 19,
    type: 'Person'
  },
  {
    id: v4(),
    name: 'Sansa',
    age: 20,
    type: 'Person'
  }
];

const sampleAnimals: Animal[] = [
  {
    id: v4(),
    name: 'Lady',
    type: 'Dog',
    age: 7
  },
  {
    id: v4(),
    name: 'Shaggydog',
    type: 'Dog',
    age: 8
  },
  {
    id: v4(),
    name: 'Summer',
    type: 'Dog',
    age: 9
  },
  {
    id: v4(),
    name: 'Nymeria',
    type: 'Dog',
    age: 10
  },
  {
    id: v4(),
    name: 'Ghost',
    type: 'Dog',
    age: 4
  }
];

export default App;
