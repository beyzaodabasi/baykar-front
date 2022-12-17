//import { getByPlaceholderText } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Modal from "./Modal";
import { CSVLink, CSVDownload } from "react-csv";


const CountriesTables = ({ route, navigation }) => {

  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [choice, setChoice] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({})

  function excelExport() {
  }

  const getCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all')
      setCountries(response.data)
      setFilteredCountries(response.data)
    } catch (error) {
      console.log(error);
    }
  };



  const columns = [
    // {
    //   name: "Ülke Adı",
    //   selector: row => row.name,
    //   sortable: true
    // },

    
    {//button
      name: "Action",
      cell: row => <div>  <button onClick={() => {
        setShowModal(true)
        setSelectedCountry(row)
        console.log('Selected Data: ', row.alpha2Code)
      }
      } class="  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
        <span>{row.name}</span>
      </button>

        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"

            >
              <div className="relative w-auto my-6 mx-auto w-1/2">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"

                >
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Detaylar
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">

                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-2 flex-auto "
                    // style={{
                    //   backgroundImage: `url(${selectedCountry.flag})`,
                    //   backgroundSize: 'cover',
                    //   backgroundPosition: 'center'

                  
                    // }}
                  >
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      {/*modal ekranı*/}
                      {selectedCountry.alpha2Code}
                    </p>
                    <div>
                      <p className="font-semibold text-black">
                        Ülke İsmi
                      </p>
                      <input className="rounded p-1 border-2 border-black text-black " value={selectedCountry.name} onChange={(e) => {
                        setSelectedCountry({ ...selectedCountry, name: e.target.value })
                      }} />
                    </div>
                    <div>
                      <p className="font-semibold text-black">
                        Ülke Başkenti
                      </p>
                      <input style={{ backgraudColor: 'red' }}className="rounded p-1 border-2 border-black text-black" value={selectedCountry.capital} onChange={(e) => {
                        setSelectedCountry({ ...selectedCountry, capital: e.target.value })
                        
                      }} />
                    </div>
                    <div>
                      <p className="font-semibold text-black">
                        Ülkenin Bulunduğu Bölge
                      </p>
                      <input className="rounded p-1 border-2 border-black text-black" value={selectedCountry.region} onChange={(e) => {
                        setSelectedCountry({ ...selectedCountry, region: e.target.value })
                      }} />
                    </div>
                    <div>
                      <p className="font-semibold text-black">
                        Ülke Nüfusu
                      </p>
                      <input className="rounded p-1 border-2 border-black text-black" value={selectedCountry.population} onChange={(e) => {
                        setSelectedCountry({ ...selectedCountry, population: e.target.value })
                      }} />
                    </div>
                    <div>
                    <p className="font-semibold text-black">
                        Bayrak
                      </p>
                      <img width={200} height={100} src={selectedCountry.flag} />
                    </div>

                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Geri
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}


      </div>











    }

    ,
    {
      name: "Ülke Yerel Adı",
      selector: row => row.nativeName,
      sortable: true
      
    },
    {
      name: "Başkent",
      selector: row => row.capital,
      sortable: true
    },

    {
      name: "Ülke Bayrağı",
      selector: row => <img width={50} height={50} src={row.flag} />
    },

  ];



  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });

    setFilteredCountries(result)
  }, [search])

 
// TODO: https://www.npmjs.com/package/react-csv


  return (
    <>
      <DataTable title="Ülke Listesi"
        columns={columns}
        data={filteredCountries}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectableRowsHighlight
        //editable table
        expandableInheritConditionalStyles
        highlightOnHover
        
        subHeader
        subHeaderComponent={<input type="text" id="voice-search" class="justfy-left  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
       focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
         dark:focus:border-blue-500" placeholder="Ülke ismine göre ARA..." required




          value={search} onChange={(e) => setSearch(e.target.value)} />}

      />
    
    </>

  )
}

export default CountriesTables;