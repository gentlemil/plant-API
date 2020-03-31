class App extends React.PureComponent {

    constructor(props) {
      console.log('constructor');
      super(props);
      this.state = {
        categories: [],
        plants: [],
        successCategories: undefined,
        successPlants: undefined,
        inProgress: true,
        value: '',
  
        plantName: '',
        plantCategory: '',
        plantRoom: '',
        wateringInterval: '',
        fertilizingInterval: '',
        requiredExposure: '',
        requiredTemperature: '',
        requiredHumidity: '',
        plantBlooming: '',
        plantDifficulty: '',
      };
      this.handleChange = this.handleChange.bind(this)
    }
  
    componentDidMount() {
      console.log('componentDidMount');
  
      const stopProgress = () => {
        console.log('stopProgress');
        this.setState({ inProgress: false });
      };
  
      const allPromises = Promise.allSettled([
        this.fetchCategories(),
        this.fetchPlants()
      ]).then(stopProgress);
  
    }
  
    delayFetch(ms, method) {
      return new Promise((resolve, reject) => setTimeout(() => method(resolve, reject), ms));
    }
  
    fetchCategories() {
      const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
  
      return this.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
        axios.get(requestUrl)
          .then((response) => {
            const data = response.data;
            const categories = data.map((item) => item.name);
            const successCategories = true;
            this.setState({ categories, successCategories });
            resolve();
          })
          .catch((error) => {
            this.setState({ successCategories: false });
            reject();
          })
          .finally(() => {
            console.log('Resolved');
          });
      });
    }
  
    fetchPlants() {
      const requestUrl = 'http://gentle-tor-07382.herokuapp.com/plants/';
  
      return this.delayFetch(PLANTS_FETCH_DELAY, (resolve, reject) => {
        axios.get(requestUrl)
          .then((response) => {
            const data = response.data;
            const plants = data.map((item) => item.name);
            const successPlants = true;
            this.setState({ plants, successPlants });
            resolve();
          })
          .catch((error) => {
            this.setState({ successPlants: false });
            reject();
          });
      });
    }
  
    // inputOnChange = (event) => {
    //   this.setState({ value: event.currentTarget.value});
    // };
  
  
    // ----------------------------------------------
    // funkcja sprawdzajaca czy wyraz jest palidromem
  
  
  
    handleChange(event) {
      const { name, value, type, checked } = event.target
      type === 'checkbox' ?
        this.setState({ [name]: checked }) :
        this.setState({ [name]: value })
    }
  
    render() {
      const {
        categories,
        plants,
        inProgress,
        successCategories,
        successPlants,
        value,
      } = this.state;
  
      console.log('render');
  
      return (
        <React.Fragment>
          <div className='plant-add-form'>
            <h1>Add new plant</h1>
            <form method="GET">
              <label className='label-form'>Name:</label>
              <input
                type='text'
                value={this.state.plantName}
                name='plantName'
                onChange={this.handleChange}
              />
              <br />
  
              <label className='label-form'>Plant Category:</label>
              <select
                value={this.state.plantCategory}
                onChange={this.handleChange}
                name='plantCategory'
              >
                <option value='succulent'>succulent</option>
                <option value='tillandsia'>tillandsia</option>
                <option value='cacti'>cacti</option>
                <option value='orchids'>orchids</option>
                <option value='green-plant'>green-plant</option>
                <option value='house-plant'>house-plant</option>
                <option value='other'>other</option>
              </select>
              <br />
  
              <label className='label-form'>Plant Room:</label>
              <select
                value={this.state.plantRoom}
                onChange={this.handleChange}
                name='plantRoom'
              >
                <option value='living-room'>living room</option>
                <option value='bedroom'>bedroom</option>
                <option value='bathroom'>bathroom</option>
                <option value='kitchen'>kitchen</option>
                <option value='balcony'>balcony</option>
                <option value='sleeping-room'>sleeping room</option>
              </select>
              <br />
  
              <label className='label-form'>Watering Interval:</label>
              <input
                type='text'
                value={this.state.wateringInterval}
                name='wateringInterval'
                placeholder=''
                onChange={this.handleChange}
              />
              <br />
  
              <label className='label-form'>Fertilizing Interval:</label>
              <input
                type='text'
                value={this.state.fertilizingInterval}
                name='fertilizingInterval'
                placeholder=''
                onChange={this.handleChange}
              />
              <br />
  
              <label className='label-form'>Required Exposure:</label>
              <input
                type='text'
                value={this.state.requiredExposure}
                name='requiredExposure'
                placeholder=''
                onChange={this.handleChange}
              />
              <br />
  
              <label className='label-form'>Required Temperature:</label>
              <input
                type='text'
                value={this.state.requiredTemperature}
                name='requiredTemperature'
                placeholder=''
                onChange={this.handleChange}
              />
              <br />
  
              <label className='label-form'>Required Humidity:</label>
              <input
                type='text'
                value={this.state.requiredHumidity}
                name='requiredHumidity'
                placeholder=''
                onChange={this.handleChange}
              />
              <br />
  
              <label className='label-form'>Blooming:</label>
              <input
                type='checkbox'
                name='plantBlooming'
                checked={this.state.plantBlooming}
                onChange={this.handleChange}
              />
              <br />
  
              <label className='label-form'>Difficulty:</label>
              <select
                value={this.state.plantDifficulty}
                onChange={this.handleChange}
                name='plantDifficulty'
              >
                <option value='beginner'>beginner</option>
                <option value='medium-low'>medium-low</option>
                <option value='medium'>medium</option>
                <option value='medium-high'>medium-high</option>
                <option value='high'>high</option>
              </select>
              <br />
  
              {/* <Label for="plantName">Plant name:</Label>
            <Input
              id="plantName"
              type="text"
              value={value}
              onChange={this.inputOnChange}
            /> */}
  
              <Button type="submit" className="mt-3">Wyślij formularz</Button>
              <br />
            </form>
  
          </div>
          <div className="app-container">
            {
              inProgress && <p>Loading data...</p>
            }
            {
              successCategories === false &&
              <p>Nie udało się pobrać Kategorii</p>
            }
            {
              successPlants === false &&
              <p>Nie udało się pobrać Kwiatow</p>
            }
            {
              successPlants &&
              <div className="plants">
                {
                  plants.map((plant, index, arr) =>
                    <Plant
                      name={plant}
                      key={index}
                    />
                  )
                }
              </div>
            }
            {
              successCategories &&
              <div className="categories">
                {
                  categories.map((item, index, arr) =>
                    <CategoryItem
                      category={item}
                      label='category'
                      key={index}
                      isLastItem={arr.length - 1 === index}
                      index={index}
                    />
                  )
                }
              </div>
            }
          </div>
        </React.Fragment>
      )
    }
  }