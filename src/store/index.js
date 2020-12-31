import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { urlShortening, timeCalculations } from "@/mixins/mixin";
// import {resolvePath} from "vue-router/src/util/path";

Vue.use(Vuex)

export default new Vuex.Store({
    state : {

        topStoryState : [],
        newStoryState : [],
        newestStoryState : [],
        askStoryState : [], 
        storyState : [],
        showStoryState : [],
        jobStoryState : [],

        moreButtonClicks : 0,
    },

    mutations : {

        setTopStoryState(state, payload) {
            state.topStoryState.push(payload)
        },

        topStoriesMoreButtonClickIncrease(state) {
            state.moreButtonClicks++
        },

        setNewStoryState(state, payload) {
            state.newStoryState.push(payload)
        },

        setNewestStoryState(state, payload) {
            state.newestStoryState.push(payload)
        },

        newStoriesMoreButtonClickIncrease(state) {
            state.moreButtonClicks++
        },


        setAskStoryState(state, payload) {
            state.askStoryState.push(payload)
        },

        askStoriesMoreButtonClickIncrease(state) {
            state.moreButtonClicks++
        },


        setShowStoryState(state, payload) {
            state.showStoryState.push(payload)
        },
        
        showStoriesMoreButtonClickIncrease(state) {
            state.showStoryState = []
            state.moreButtonClicks++
        },


        setJobStoryState(state, payload) {
            state.jobStoryState.push(payload)
        },

        emptyStoryStates(state) {
            state.topStoryState  = []
            state.newestStoryState  = []
            state.askStoryState  = []
            state.showStoryState = []
            state.jobStoryState  = []
        },

        moreButtonClicksIncrease(state){
            state.storyState = []
            state.moreButtonClicks++
        },

        emptyMoreButtonClicks(state) {
            state.moreButtonClicks = 0
        }
    },

    actions : {


        async getTopStories({state, commit}) {
            
            await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
                .then( async (response) => {
                    for (let i = 30 * state.moreButtonClicks; i < 30 * (state.moreButtonClicks + 1); i++) {
                        await axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json?print=pretty`)
                            .then(response => {
                                
                                // Url Shortening
                                response.data.url = urlShortening(response.data.url)

                                // Time Calculations
                                response.data.time = timeCalculations(response.data.time)
                                
                                commit("setTopStoryState", response.data)

                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },

        async getNewStories({state, commit}) {
            
            await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
                .then( async (response) => {
                    for (let i = 30 * state.moreButtonClicks; i < 30 * (state.moreButtonClicks + 1); i++) {
                        await axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json?print=pretty`)
                            .then(response => {
                                
                                // Url Shortening
                                response.data.url = urlShortening(response.data.url)

                                // Time Calculations
                                response.data.time = timeCalculations(response.data.time)
                                
                                commit("setNewStoryState", response.data)

                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },
        
        async getNewestStories({ state, commit }) {

            await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
                .then( async (response) => {
                    for (let i = 30 * state.moreButtonClicks; i < 30 * (state.moreButtonClicks + 1); i++) {
                        await axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json?print=pretty`)
                            .then(response => {
                                
                                // Url Shortening
                                response.data.url = urlShortening(response.data.url)

                                // Time Calculations
                                response.data.time = timeCalculations(response.data.time)

                                commit("setNewestStoryState", response.data)

                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                })
                .catch(err => {
                    console.log(err);
                })


        },

        async getAskStories({ state, commit }) {

            await axios.get("https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty")
                .then( async (response) => {
                    for (let i = 30 * state.moreButtonClicks; i < 30 * (state.moreButtonClicks + 1); i++) {
                        await axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json?print=pretty`)
                            .then(response => {
                                
                                // Url Shortening
                                response.data.url = urlShortening(response.data.url)

                                // Time Calculations
                                response.data.time = timeCalculations(response.data.time)

                                commit("setAskStoryState", response.data)

                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },

        async getShowStories({state, commit}) {
            
            await axios.get("https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty")
                .then( async (response) => {
                    for (let i = 30 * state.moreButtonClicks; i < 30 * (state.moreButtonClicks + 1); i++) {
                        await axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json?print=pretty`)
                            .then(response => {
                                
                                // Url Shortening
                                response.data.url = urlShortening(response.data.url)

                                // Time Calculations
                                response.data.time = timeCalculations(response.data.time)
                                commit("setShowStoryState", response.data)

                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },

        async getJobStories({state, commit}) {
            
            await axios.get("https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty")
                .then( async (response) => {
                    for (let i = 30 * state.moreButtonClicks; i < 30 * (state.moreButtonClicks + 1); i++) {
                        await axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json?print=pretty`)
                            .then(response => {
                                
                                // Url Shortening
                                response.data.url = urlShortening(response.data.url)

                                // Time Calculations
                                response.data.time = timeCalculations(response.data.time)
                                
                                commit("setJobStoryState", response.data)

                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        },

         getStoryData({ state, commit }, payload) {
            let localStoryArray = []
            let storyIds = []

             if (state.storyState != null) {
                 commit('emptyStoryState')
             }

            // Get Story Ids
             axios.get(payload)
                .then( async response => {
                    console.log(response)
                    // Get Stories
                    for (let i = 30 * state.moreButtonClicks; i < 30 * (state.moreButtonClicks + 1); i++) {
                        await axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json?print=pretty`)
                            .then(response => {
                                console.log(response)

                                // Url Shortening
                                response.data.formattedUrl = urlShortening(response.data.url)

                                // Time Calculations
                                response.data.time = timeCalculations(response.data.time)

                                response.data.index = i + 1

                                console.log(response.data)
                                commit('setStoryState', response.data)

                                // localStoryArray.push(response.data)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    }
                    // console.log(Array.isArray(localStoryArray))
                    // console.log(typeof localStoryArray)
                    //
                    // let strarr = []
                    //
                    // console.log(typeof strarr)
                    //
                    //
                    // let localIndex = 30 * state.moreButtonClicks + 1
                    // for (const localStoryArrayKey in localStoryArray) {
                    //     localIndex++
                    //     localStoryArrayKey.index = localIndex
                    // }
                    //
                    // console.log(localStoryArray)
                    // for (let j = 0; j < localStoryArray.length; j++) {
                    //     console.log("içeride")
                    //     // localStoryArray[0].index = i + 1
                    // }

                })
                 .catch(err => {
                     console.log(err)
                 })

        }






//         getStoryData({ commit, state }, payload) {
//             let localStoryArray = []
//
//             // Get Story Ids
//             axios.get(payload)
//                 .then(response => {
//                     console.log(response)
//                     if (30 * state.moreButtonClicks < response.length) {
//                         for (let i = 30 * state.moreButtonClicks; i < 30 * (state.moreButtonClicks + 1); i++) {
//                             // Get Stories
//                             axios.get(`https://hacker-news.firebaseio.com/v0/item/${response[i]}.json?print=pretty`)
//                                 .then(response => {
//                                     //  Url Shortening
//                                     response.formattedUrl = urlShortening(response.url)
//                                     delete response.url
//
//                                     // Time Calculations
//                                     response.calculatedTime = timeCalculations(response.time)
//                                     delete response.time
//
//                                     commit.setStoryState(response)
//                                 })
//                                 .catch(err => {
//                                     console.log(err)
//                                 })
//                         }
//                     }
//
//
//
//
//
//
//
//                 //     response.data.forEach(item => {
//                 //         axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
//                 //             .then(response => {
//                 //                 // Url Shortening
//                 //                 if (response.data.url) {
//                 //                     response.data.formattedUrl = urlShortening(response.data)
//                 //                 }
//                 //                 // Time Calculations
//                 //                 response.data.calculatedTime = timeCalculations(response.data)
//                 //                 localNewStoryArray.push(response.data)
//                 //             })
//                 //             .catch(err => {
//                 //                 console.log(err)
//                 //             })
//                 //     })
//                 //     console.log(localNewStoryArray)
//                 //     commit('setNewStoryData', localNewStoryArray)
//                 // })
//                 .catch(err => {
//                     console.log("getNewStoryData")
//                     console.log(err)
//                 })
//
//
//
//
//
//
//
//
//             // .then(response => {
//             //         for (let i = 0; i < state.numberOfRequests * payload.numberOfMoreButtonClick; i++){
//             //             axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json?print=pretty`)
//             //         .then(response => {
//             //                 // Url Shortening
//             //                 if(response.data.url) {
//             //                     response.data.formattedUrl = urlShortening(response.data)
//             //                 }
//             //
//             //                 // Time Calculations
//             //                 response.data.calculatedTime = timeCalculations(response.data)
//             //
//             //                 localStoryArray.push(response.data)
//             //             })
//             //             .catch(err => {
//             //                 console.log(err);
//             //             })
//             //         }
//             //     console.log(response)
//             // })
//             // .catch(err => {
//             //     console.log(err);
//             // })
//             commit('setStoryState', localStoryArray)
//         },
//
    }
})

//send datas in an array
