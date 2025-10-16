<template>
    <div>
        <h1>Initiative Table</h1>
        <table class="border-collapse border border-gray-400 w-full">
            <thead class="bg-gray-200 text-black">
                <tr>
                    <th>Name</th>
                    <th>Initiative</th>
                    <th>Conditions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Grog</td>
                    <td>21</td>
                    <td>
                        <div class="flex flex-wrap gap-1 mb-2">
                            <span 
                                v-for="condition in selectedConditions" 
                                :key="condition.name" 
                                :class="condition.color"
                                class="px-2 py-1 rounded text-xs font-medium flex items-center gap-1"
                            >
                                {{ condition.name }}
                                <button 
                                    @click="removeCondition(condition.name)"
                                    class="ml-1 text-xs font-bold hover:bg-black hover:bg-opacity-20 rounded px-1"
                                >
                                    ×
                                </button>
                            </span>
                        </div>
                        <div class="relative">
                            <input 
                                v-model="conditionInput"
                                @input="filterConditions"
                                @focus="showDropdown = true"
                                @blur="hideDropdown"
                                @keydown.enter.prevent="selectCondition"
                                @keydown.arrow-down.prevent="moveSelection(1)"
                                @keydown.arrow-up.prevent="moveSelection(-1)"
                                placeholder="Type condition name..."
                                class="border border-gray-300 rounded px-2 py-1 text-sm w-full"
                            />
                            <div 
                                v-if="showDropdown && filteredConditions.length > 0"
                                class="absolute z-50 bg-white border border-gray-300 rounded mt-1 max-h-32 overflow-y-auto min-w-64 shadow-lg left-0 top-full"
                            >
                                <div 
                                    v-for="(condition, index) in filteredConditions"
                                    :key="condition.name"
                                    @mousedown.prevent="addCondition(condition)"
                                    :class="{ 'bg-blue-100': index === selectedIndex }"
                                    class="px-2 py-1 text-sm cursor-pointer hover:bg-gray-100 flex items-center gap-2"
                                >
                                    <span 
                                        :class="condition.color"
                                        class="px-1 py-0.5 rounded text-xs"
                                    >
                                        {{ condition.name }}
                                    </span>
                                    <span class="text-gray-600 text-xs truncate">{{ condition.description.substring(0, 50) }}...</span>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStatusStore } from '../stores'

// Use the store
const statusStore = useStatusStore()

// Component state
const conditionInput = ref('')
const selectedConditions = ref<any[]>([])
const showDropdown = ref(false)
const selectedIndex = ref(0)

// Computed properties
const filteredConditions = computed(() => {
    if (!conditionInput.value) return statusStore.conditions
    
    const searchTerm = conditionInput.value.toLowerCase()
    return statusStore.conditions.filter((condition: any) => 
        condition.name.toLowerCase().includes(searchTerm) &&
        !selectedConditions.value.some((selected: any) => selected.name === condition.name)
    )
})

// Methods
const filterConditions = () => {
    selectedIndex.value = 0
}

const hideDropdown = () => {
    setTimeout(() => {
        showDropdown.value = false
    }, 150)
}

const addCondition = (condition: any) => {
    if (!selectedConditions.value.some((selected: any) => selected.name === condition.name)) {
        selectedConditions.value.push(condition)
        conditionInput.value = ''
        showDropdown.value = false
        selectedIndex.value = 0
    }
}

const removeCondition = (conditionName: string) => {
    selectedConditions.value = selectedConditions.value.filter((condition: any) => condition.name !== conditionName)
}

const selectCondition = () => {
    if (filteredConditions.value.length > 0 && selectedIndex.value >= 0 && selectedIndex.value < filteredConditions.value.length) {
        addCondition(filteredConditions.value[selectedIndex.value])
    }
}

const moveSelection = (direction: number) => {
    if (filteredConditions.value.length === 0) return
    
    selectedIndex.value += direction
    if (selectedIndex.value < 0) {
        selectedIndex.value = filteredConditions.value.length - 1
    } else if (selectedIndex.value >= filteredConditions.value.length) {
        selectedIndex.value = 0
    }
}
</script>