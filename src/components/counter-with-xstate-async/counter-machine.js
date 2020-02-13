import {
    createMachine,
    assign
} from "xstate"

function update (context, action, state){
    return action.payload;  
}

const counterMachine = createMachine({
    initial: 'active',
    context: {
        count: null,
        // loading: false,
        // success: false,
        // error: null
    },
    states: {
        active: {
            on: {
                UPDATE: {
                    actions: assign({
                        count: (...args) => update(...args)
                    })
                },
            }
        }
    }
})

export default counterMachine