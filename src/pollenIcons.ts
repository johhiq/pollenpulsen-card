/**
 * Pollen Icons Collection
 * 
 * A collection of SVG path data for different pollen types.
 * Each icon is designed for a 50x50 viewBox.
 * 
 * Usage:
 * <svg viewBox="0 0 50 50">
 *   <path d="[PATH_DATA]" />
 * </svg>
 */

export const POLLEN_ICONS: { [key: string]: string } = {
    /**
     * Alder (Al) - Alnus
     * Distinctive leaf shape with serrated edges
     */
    'Al': 'M37.812,19.625L25.952,0.375a0.437,0.437,0,0,1-.125-0.25L25.7,0H24.953a0.122,0.122,0,0,0-.125.125,0.437,0.437,0,0,0-.125.25L12.22,19.625a15.1,15.1,0,0,0,2.122,18.5A14.613,14.613,0,0,0,23.83,42.5v6.375a1.124,1.124,0,1,0,2.247,0V42.5a14.342,14.342,0,0,0,9.488-4.375,14.956,14.956,0,0,0,2.247-18.5M26.077,4.875l5.368,8.75H31.32l-5.243,6.75V4.875Zm-2.122,15.5-5.493-6.5,5.493-9v15.5Zm0,3.375v8.125l-9.737-11.25,3-4.875Zm2.122,0.125L32.568,15.5l3.121,5.25L25.952,32V23.875h0.125ZM15.965,36.75a12.735,12.735,0,0,1-2.746-14l10.861,12.5v5.125a12.533,12.533,0,0,1-8.114-3.625m18.1,0a12.94,12.94,0,0,1-7.99,3.75v-5L36.938,22.875A12.847,12.847,0,0,1,34.066,36.75',
    
    /**
     * Elm (Alm) - Ulmus
     * Asymmetrical leaf with double-serrated margins
     */
    'Alm': 'M40.99,25.974A28.9,28.9,0,0,0,38.6,14.77a33.238,33.238,0,0,0-5.287-8.092,34.411,34.411,0,0,0-7.8-6.6A1.4,1.4,0,0,0,24.5.08a37.7,37.7,0,0,0-7.8,6.6,29.927,29.927,0,0,0-5.287,8.092,26.787,26.787,0,0,0-2.392,11.2A16.213,16.213,0,0,0,24,42.033V49a1.007,1.007,0,0,0,2.014,0V42.033A16.213,16.213,0,0,0,40.99,25.974M11.283,28.588L22.36,39.668a13.719,13.719,0,0,1-11.077-11.08M24,38.548L11.031,25.476A27.08,27.08,0,0,1,11.66,20L24,32.323v6.224h0Zm0-8.963L12.29,18.007l-0.126-.124a31.214,31.214,0,0,1,1.888-4.233l9.819,9.71v6.224H24ZM24,20.5l-8.686-8.714A31.84,31.84,0,0,1,17.954,8.3L24,14.272V20.5Zm0-8.963L19.213,6.8A28.791,28.791,0,0,1,24,2.819v8.714Zm2.014-8.839a44.866,44.866,0,0,1,4.783,3.984l-4.783,4.731V2.695Zm0,11.578L32.053,8.3A31.827,31.827,0,0,1,34.7,11.782L25.885,20.5V14.272h0.126Zm0,9.088,9.818-9.71a31.178,31.178,0,0,1,1.888,4.233l-0.126.124L26.011,29.584V23.36Zm1.636,16.308,11.077-11.08a13.874,13.874,0,0,1-11.077,11.08m-1.636-1.12V32.323L38.347,20a26.1,26.1,0,0,1,.629,5.477Z',
    
    /**
     * Ragweed (Malörtsambrosia) - Ambrosia artemisiifolia
     * Detailed representation of the plant's branching structure
     */
    'Malörtsambrosia': 'M26.8,50c-0.6,0-1.1-0.5-1.1-1.1V4.2c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1v44.6 C28,49.5,27.5,50,26.8,50z M26.4,43.6c-0.2,0-0.4-0.1-0.6-0.3L12.4,29.6c-0.3-0.3-0.3-0.9,0-1.2c0.3-0.3,0.9-0.3,1.2,0L27,42.2 c0.3,0.3,0.3,0.9,0,1.2C26.9,43.6,26.6,43.6,26.4,43.6z M21.7,38.2c-0.3,0-0.6-0.3-0.6-0.6v-4c0-0.3,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v4C22.3,38,22,38.2,21.7,38.2z M21.7,38.6h-3.9c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6h3.9c0.3,0,0.6,0.3,0.6,0.6 C22.3,38.3,22,38.6,21.7,38.6z M17.3,33.7c-0.2,0-0.4-0.2-0.4-0.4v-2.6c0-0.2,0.2-0.4,0.4-0.4c0.2,0,0.4,0.2,0.4,0.4v2.6 C17.7,33.5,17.5,33.7,17.3,33.7z M17.5,33.7h-3.1c-0.2,0-0.4-0.2-0.4-0.4s0.2-0.4,0.4-0.4h3.1c0.2,0,0.4,0.2,0.4,0.4S17.7,33.7,17.5,33.7z M26.8,47.4c-0.2,0-0.3,0-0.5-0.1c-0.4-0.3-0.5-0.8-0.2-1.2l10.6-15.7c0.3-0.4,0.8-0.5,1.2-0.2 c0.4,0.3,0.5,0.8,0.2,1.2L27.5,47C27.3,47.3,27,47.4,26.8,47.4z M30.8,41.5c-0.3,0-0.5-0.2-0.6-0.5c-0.1-0.3,0.1-0.6,0.5-0.7l3.9-0.8c0.3-0.1,0.6,0.1,0.7,0.5 c0.1,0.3-0.1,0.6-0.5,0.7l-3.9,0.8C30.8,41.5,30.8,41.5,30.8,41.5z M30.4,41.6c-0.3,0-0.5-0.2-0.6-0.5l-0.8-3.9c-0.1-0.3,0.1-0.6,0.5-0.7c0.3-0.1,0.6,0.1,0.7,0.5l0.8,3.9 c0.1,0.3-0.1,0.6-0.5,0.7C30.5,41.6,30.5,41.6,30.4,41.6z M34.1,36.2c-0.2,0-0.4-0.1-0.4-0.3c0-0.2,0.1-0.4,0.3-0.5l2.5-0.5c0.2,0,0.4,0.1,0.5,0.3 c0,0.2-0.1,0.4-0.3,0.5L34.1,36.2C34.1,36.2,34.1,36.2,34.1,36.2z M34.1,36.4c-0.2,0-0.4-0.1-0.4-0.3L33.1,33c0-0.2,0.1-0.4,0.3-0.5c0.2,0,0.4,0.1,0.5,0.3l0.6,3.1 C34.6,36.2,34.4,36.4,34.1,36.4C34.2,36.4,34.1,36.4,34.1,36.4z M27.3,32.2c-0.2,0-0.4-0.1-0.6-0.2c-0.4-0.3-0.4-0.9-0.1-1.2l10.3-11.9c0.3-0.4,0.9-0.4,1.2-0.1 c0.4,0.3,0.4,0.9,0.1,1.2L27.9,31.9C27.7,32.1,27.5,32.2,27.3,32.2z M29.8,29.3c-0.3,0-0.5-0.2-0.6-0.5c0-0.3,0.2-0.6,0.5-0.6l3-0.2c0.3,0,0.6,0.2,0.6,0.5c0,0.3-0.2,0.6-0.5,0.6 L29.8,29.3C29.8,29.3,29.8,29.3,29.8,29.3z M29.5,29.3c-0.3,0-0.5-0.2-0.6-0.5l-0.2-3c0-0.3,0.2-0.6,0.5-0.6c0.3,0,0.6,0.2,0.6,0.5l0.2,3 C30.1,29,29.9,29.2,29.5,29.3C29.5,29.3,29.5,29.3,29.5,29.3z M33.8,24.5c-0.3,0-0.5-0.2-0.6-0.5c0-0.3,0.2-0.6,0.5-0.6l2.6-0.2c0.3,0,0.6,0.2,0.6,0.5 c0,0.3-0.2,0.6-0.5,0.6L33.8,24.5C33.8,24.5,33.8,24.5,33.8,24.5z M33.8,24.7c-0.3,0-0.5-0.2-0.6-0.5L33,21.1c0-0.3,0.2-0.6,0.5-0.6c0.3,0,0.6,0.2,0.6,0.5l0.2,3.1 C34.4,24.4,34.1,24.7,33.8,24.7C33.8,24.7,33.8,24.7,33.8,24.7z M26,28.6c-0.2,0-0.5-0.1-0.7-0.3l-9-11.1c-0.3-0.4-0.2-0.9,0.1-1.2c0.4-0.3,0.9-0.2,1.2,0.1l9,11.1 c0.3,0.4,0.2,0.9-0.1,1.2C26.4,28.5,26.2,28.6,26,28.6z M23.8,25.4C23.8,25.4,23.8,25.4,23.8,25.4c-0.4,0-0.6-0.3-0.6-0.6l0.3-3c0-0.3,0.3-0.5,0.6-0.5 c0.3,0,0.5,0.3,0.5,0.6l-0.3,3C24.4,25.2,24.1,25.4,23.8,25.4z M23.8,25.6C23.8,25.6,23.8,25.6,23.8,25.6l-3.1-0.3c-0.3,0-0.5-0.3-0.5-0.6c0-0.3,0.3-0.5,0.6-0.5l3,0.3 c0.3,0,0.5,0.3,0.5,0.6C24.3,25.4,24.1,25.6,23.8,25.6z M19.9,20.4C19.9,20.4,19.8,20.4,19.9,20.4c-0.3,0-0.4-0.2-0.4-0.4l0.3-2.6c0-0.2,0.2-0.4,0.4-0.4 c0.2,0,0.4,0.2,0.4,0.4l-0.3,2.6C20.3,20.3,20.1,20.4,19.9,20.4z M20.1,20.5C20.1,20.5,20.1,20.5,20.1,20.5L17,20.1c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4l3.1,0.3 c0.2,0,0.4,0.2,0.4,0.4C20.5,20.3,20.3,20.5,20.1,20.5z M25.3,14.4c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.3-0.6-0.1-0.8l1.2-1.4c0.2-0.2,0.6-0.3,0.8-0.1 c0.2,0.2,0.3,0.6,0.1,0.8l-1.2,1.4C25.6,14.3,25.4,14.4,25.3,14.4z M25.1,12.6c-0.1,0-0.2,0-0.3-0.1c-0.2-0.2-0.2-0.4-0.1-0.6l1.2-1.4c0.2-0.2,0.4-0.2,0.6-0.1 c0.2,0.2,0.2,0.4,0.1,0.6l-1.2,1.4C25.3,12.6,25.2,12.6,25.1,12.6z M25.2,10.6c-0.1,0-0.2,0-0.3-0.1c-0.2-0.2-0.2-0.4-0.1-0.6L26,8.4c0.2-0.2,0.4-0.2,0.6-0.1 c0.2,0.2,0.2,0.4,0.1,0.6l-1.2,1.4C25.5,10.5,25.3,10.6,25.2,10.6z M25.1,8.8c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L26,6.8c0.1-0.1,0.3-0.2,0.5-0.1 c0.1,0.1,0.2,0.3,0.1,0.5l-1.2,1.4C25.3,8.7,25.2,8.8,25.1,8.8z M25.1,6.2c0,0-0.1,0-0.1,0C25,6.1,25,6,25,5.9l1.7-2.2c0.1-0.1,0.2-0.1,0.2,0C27,3.8,27,3.9,27,3.9l-1.7,2.2 C25.2,6.2,25.2,6.2,25.1,6.2z M28.5,14.5c-0.2,0-0.3-0.1-0.4-0.2l-1.2-1.4c-0.2-0.2-0.2-0.6,0.1-0.8c0.2-0.2,0.6-0.2,0.8,0.1l1.2,1.4 c0.2,0.2,0.2,0.6-0.1,0.8C28.7,14.4,28.6,14.5,28.5,14.5z M28.6,12.6c-0.1,0-0.3-0.1-0.4-0.2L27.1,11c-0.2-0.2-0.1-0.5,0.1-0.6c0.2-0.2,0.5-0.1,0.6,0.1l1.2,1.4 c0.2,0.2,0.1,0.5-0.1,0.6C28.8,12.6,28.7,12.6,28.6,12.6z M28.5,10.6c-0.1,0-0.3-0.1-0.4-0.2L27,9c-0.2-0.2-0.1-0.5,0.1-0.6c0.2-0.2,0.5-0.1,0.6,0.1l1.2,1.4 c0.2,0.2,0.1,0.5-0.1,0.6C28.7,10.5,28.6,10.6,28.5,10.6z M28.6,8.9c-0.1,0-0.2,0-0.3-0.1l-1.2-1.4c-0.1-0.1-0.1-0.4,0.1-0.5c0.1-0.1,0.4-0.1,0.5,0.1l1.2,1.4 C29,8.5,29,8.7,28.9,8.8C28.8,8.9,28.7,8.9,28.6,8.9z M28.5,6.3c-0.1,0-0.1,0-0.1-0.1l-1.6-2.3c-0.1-0.1,0-0.2,0-0.2c0.1-0.1,0.2,0,0.2,0L28.7,6 C28.7,6.1,28.7,6.2,28.5,6.3C28.6,6.3,28.6,6.3,28.5,6.3z M25.1,7.3c-0.1,0-0.1,0-0.1-0.1c-0.1-0.1-0.1-0.2,0-0.3l1.2-1.4c0.1-0.1,0.2-0.1,0.3,0c0.1,0.1,0.1,0.2,0,0.3 l-1.2,1.4C25.2,7.3,25.2,7.3,25.1,7.3z M28.6,7.3c-0.1,0-0.1,0-0.2-0.1l-1.2-1.4c-0.1-0.1-0.1-0.2,0-0.3c0.1-0.1,0.2-0.1,0.3,0L28.7,7 c0.1,0.1,0.1,0.2,0,0.3C28.7,7.3,28.6,7.3,28.6,7.3z M25.2,5C25.1,5,25.1,5,25.2,5C25,5,25,4.9,25,4.8l1.6-2.4c0.1-0.1,0.2-0.1,0.2,0c0.1,0.1,0.1,0.2,0,0.2L25.3,5 C25.3,5,25.2,5,25.2,5z M28.5,5.1c-0.1,0-0.1,0-0.1-0.1l-1.6-2.5c-0.1-0.1,0-0.2,0-0.2c0.1-0.1,0.2,0,0.2,0l1.6,2.5 C28.7,4.9,28.7,5,28.5,5.1C28.6,5.1,28.5,5.1,28.5,5.1z M26.8,3.1 a0.4,0.6 0 1,0 0.8,0 a0.4,0.6 0 1,0 -0.8,0',
    
    /**
     * Birch (Björk) - Betula
     * Triangular leaf with serrated edges
     */
    'Björk': 'M25.029,5.223a8.65,8.65,0,0,0,.819,2.042,3.224,3.224,0,0,0,2.119,1.424,5.189,5.189,0,0,0,1.493.047,10.65,10.65,0,0,0,.241,4.8,1.21,1.21,0,0,0,1.83.522l1.059-.855a9.235,9.235,0,0,0,1.3,5.176,1.281,1.281,0,0,0,1.878.095l0.578-.76a14.6,14.6,0,0,1-.337,4.416,1.187,1.187,0,0,0,.482,1.187,1.275,1.275,0,0,0,1.3,0l1.445-.95a22.33,22.33,0,0,1-1.4,5.318,1.207,1.207,0,0,0,.241,1.187,1.184,1.184,0,0,0,1.156.332l1.878-.522c-0.963,1.947-2.6,4.084-3.8,6.363A1.184,1.184,0,0,0,38.32,36.7h0.048a13.072,13.072,0,0,1-4.286,2.659c-1.83.522-4.237,0.475-7.9,0.237v-5.84l9-3.134a1.172,1.172,0,0,0,.722-1.425,1.2,1.2,0,0,0-1.445-.712l-8.283,2.849V25.784l5.586-1.994a1.162,1.162,0,0,0,.722-1.472,1.218,1.218,0,0,0-1.541-.665l-4.767,1.709V14.767a1.156,1.156,0,0,0-2.311,0v8.594l-4.767-1.709a1.3,1.3,0,0,0-1.541.9,1.148,1.148,0,0,0,.722,1.235l5.586,1.994v5.555l-8.283-2.9a1.3,1.3,0,0,0-1.541.9,1.137,1.137,0,0,0,.819,1.235l9,3.134v5.84c-3.66.237-6.067,0.285-7.9-.237a10.425,10.425,0,0,1-4.238-2.707A1.361,1.361,0,0,0,12.8,34.948c-1.2-2.279-2.841-4.416-3.8-6.363l1.878,0.522a1.154,1.154,0,0,0,1.156-.332,1.207,1.207,0,0,0,.241-1.187,22.328,22.328,0,0,1-1.4-5.318l1.445,0.95a1.275,1.275,0,0,0,1.3,0,1.122,1.122,0,0,0,.482-1.187,16.211,16.211,0,0,1-.337-4.416l0.578,0.76a1.216,1.216,0,0,0,1.878-.095,10.1,10.1,0,0,0,1.3-5.176l1.059,0.855a1.238,1.238,0,0,0,1.83-.522,10.57,10.57,0,0,0,.241-4.8,5.188,5.188,0,0,0,1.493-.047A3.472,3.472,0,0,0,24.259,7.17,9.661,9.661,0,0,0,25.029,5.223Z M24.981,0a1.125,1.125,0,0,0-1.059.807A42.946,42.946,0,0,1,22.236,6.03a0.77,0.77,0,0,1-.626.427,6.254,6.254,0,0,1-2.167-.143A1.219,1.219,0,0,0,18.095,7.74a9.3,9.3,0,0,1,.289,3.324l-1.3-1.092a1.116,1.116,0,0,0-1.2-.143,1.224,1.224,0,0,0-.674,1.045,22.99,22.99,0,0,1-.385,4.559L13.809,14.15a1.115,1.115,0,0,0-1.156-.38,1.191,1.191,0,0,0-.867.9,18.8,18.8,0,0,0-.289,5.366l-1.4-.9a1.208,1.208,0,0,0-1.2-.047,1.161,1.161,0,0,0-.626,1A19.59,19.59,0,0,0,9.427,26.4l-1.974-.57A1.187,1.187,0,0,0,6.008,27.16c0.53,2.659,2.263,4.986,3.66,7.217H8.9a1.244,1.244,0,0,0-1.059.665,1.168,1.168,0,0,0,.193,1.235c2.649,2.944,4.767,4.558,7.32,5.27,2.311,0.665,4.912.57,8.523,0.332v6.98A1.164,1.164,0,0,0,25.029,50a1.2,1.2,0,0,0,1.156-1.14V41.833c3.612,0.237,6.212.332,8.523-.333,2.6-.712,4.671-2.327,7.32-5.271A1.153,1.153,0,0,0,42.22,35a1.244,1.244,0,0,0-1.059-.665H40.342c1.445-2.232,3.13-4.558,3.66-7.217a1.24,1.24,0,0,0-1.445-1.33l-1.974.57a20.072,20.072,0,0,0,1.156-6.315,1.106,1.106,0,0,0-.626-1,1.208,1.208,0,0,0-1.2.047l-1.4.9a17.206,17.206,0,0,0-.289-5.366,1.125,1.125,0,0,0-1.974-.475l-1.011,1.282a22.99,22.99,0,0,1-.385-4.558,1.137,1.137,0,0,0-.674-1.045,1.116,1.116,0,0,0-1.2.143l-1.348,1.045a9.3,9.3,0,0,1,.289-3.324,1.219,1.219,0,0,0-1.348-1.425A6.255,6.255,0,0,1,28.4,6.41a0.77,0.77,0,0,1-.626-0.427C27.389,5.366,27,3.514,26.089.76A1.16,1.16,0,0,0,24.981,0Z',
    
    /**
     * Beech (Bok) - Fagus
     * Simple oval leaf with wavy edges and prominent veins
     */
    'Bok': 'M11.819,38.03A18,18,0,0,0,23.35,43.766L23.1,49.875,25.086,50l0.248-6.11A18.144,18.144,0,0,0,38.106,13.342L25.83,0,12.563,12.344a18.564,18.564,0,0,0-.744,25.686m24.3-22.693a15.234,15.234,0,0,1-.744,21.446,14.285,14.285,0,0,1-9.8,3.99l0.124-3.242,10.664-10.1-1.364-1.5-9.3,8.728,0.248-5.736L33.766,21.7,32.4,20.2l-6.324,5.86,0.248-5.736,4.836-4.489-1.364-1.5L26.45,17.456,26.7,9.85l-1.984-.125-0.248,7.606-3.1-3.367-1.488,1.372L24.342,20.2l-0.248,5.736-5.828-6.359-1.488,1.372L23.97,28.8l-0.248,5.736-8.68-9.352-1.488,1.371L23.6,37.282l-0.124,3.242a15.565,15.565,0,0,1-9.548-4.738,15.234,15.234,0,0,1,.744-21.446L25.706,3.99Z',
    
    /**
     * Oak (Ek) - Quercus
     * Distinctive lobed leaf pattern characteristic of oak species
     */
    'Ek': 'M35.388,31.335c3.471-2.489,6.942-5.317,6.595-7.806C41.867,22.4,40.942,21.38,39.322,20.7l-0.578-.226a7.551,7.551,0,0,1-1.62-.679l0.116-.113a10.063,10.063,0,0,0,2.893-5.2c0.463-1.584.347-2.715-.232-3.394-0.694-.905-1.967-0.792-3.124-0.792-0.926,0-1.967.113-2.43-.339a1.745,1.745,0,0,1-.463-1.471,3.73,3.73,0,0,0-.926-2.941,3.247,3.247,0,0,0-2.2-.452,1.866,1.866,0,0,1-.81,0,1.608,1.608,0,0,1-.116-0.679A4.474,4.474,0,0,0,25.553,0H25.437a4.474,4.474,0,0,0-4.281,4.412,1.611,1.611,0,0,1-.116.679,1.867,1.867,0,0,1-.81,0,2.306,2.306,0,0,0-2.2.452,3.9,3.9,0,0,0-.926,2.941,1.892,1.892,0,0,1-.463,1.471,3.291,3.291,0,0,1-2.43.339c-1.157,0-2.43-.113-3.124.792-0.579.679-.694,1.81-0.231,3.394,0.81,3.167,2.082,4.525,2.893,5.2L13.867,19.8c-0.347.113-.926,0.453-1.62,0.679l-0.578.226c-1.62.679-2.545,1.584-2.661,2.828-0.347,2.6,3.124,5.43,6.479,7.806,1.736,1.244,1.851,1.923,1.736,2.036a0.941,0.941,0,0,1-.579.566,2.248,2.248,0,0,0-1.62,1.584c-0.231,1.244.926,2.6,3.471,4.186,2.777,1.81,3.471,3.394,3.934,4.751,0.463,1.131.926,2.149,2.43,2.376v2.6a0.614,0.614,0,0,0,.579.566,0.735,0.735,0,0,0,.579-0.566V46.719c1.62-.226,1.967-1.244,2.43-2.376,0.463-1.357,1.157-2.941,3.934-4.751,2.545-1.584,3.587-2.941,3.471-4.186a1.951,1.951,0,0,0-1.5-1.584,1.266,1.266,0,0,1-.578-0.566c-0.116,0-.116-0.679,1.62-1.923M32.38,33.71a2.121,2.121,0,0,0,1.5,1.584,1.356,1.356,0,0,1,.694.566c0,0.226,0,1.131-2.893,2.941a9.059,9.059,0,0,0-4.4,5.43c-0.347,1.018-.579,1.471-1.273,1.584V39.367a15.663,15.663,0,0,1,5.554-2.149,0.625,0.625,0,1,0-.116-1.244A16.538,16.538,0,0,0,26.016,37.9V32.127C26.942,31.109,32.38,25.339,38.859,25a0.625,0.625,0,1,0-.116-1.244c-5.9.339-10.76,4.412-12.959,6.561V22.511c0.926-1.131,6.479-7.353,11.455-8.145a0.5,0.5,0,0,0,.463-0.679,0.509,0.509,0,0,0-.694-0.452c-4.513.679-9.141,5.2-11.223,7.353V12.217c0-1.81,3.24-3.054,4.512-3.394a0.642,0.642,0,0,0,.463-0.792,0.66,0.66,0,0,0-.81-0.452c-0.116,0-3.471.905-4.86,2.715-1.389-1.923-4.628-2.715-4.86-2.715a0.66,0.66,0,0,0-.81.452,0.642,0.642,0,0,0,.463.792c1.273,0.339,4.512,1.471,4.512,3.394v8.371c-2.082-2.262-6.711-6.787-11.223-7.353a0.664,0.664,0,0,0-.694.452,0.651,0.651,0,0,0,.463.679C17.917,15.158,23.47,21.38,24.4,22.511v7.806c-2.083-2.149-6.942-6.222-12.843-6.448a0.625,0.625,0,1,0-.116,1.244c6.479,0.339,11.918,6,12.843,7.127v5.769a15.6,15.6,0,0,0-5.438-1.923,0.625,0.625,0,1,0-.116,1.244A14.75,14.75,0,0,1,24.28,39.48v6.448c-0.694-.113-0.926-0.566-1.273-1.584a10.264,10.264,0,0,0-4.4-5.43c-2.777-1.81-2.893-2.715-2.893-2.941a1.036,1.036,0,0,1,.694-0.566,2.122,2.122,0,0,0,1.5-1.584c0.116-1.018-.578-2.036-2.314-3.281-1.5-1.131-6.248-4.412-6.017-6.674a2.6,2.6,0,0,1,1.967-1.81l0.579-.226c1.967-.792,2.43-1.018,2.546-1.584A1.427,1.427,0,0,0,14.1,19a8.883,8.883,0,0,1-2.545-4.638c-0.347-1.47-.231-2.036,0-2.263,0.347-.452,1.273-0.339,2.083-0.339,1.157,0,2.545.113,3.355-.679A2.984,2.984,0,0,0,17.8,8.71a2.869,2.869,0,0,1,.463-2.036,1.717,1.717,0,0,1,1.157-.113,2.734,2.734,0,0,0,1.851-.339,2.209,2.209,0,0,0,.579-1.584c0-2.6,2.545-3.054,3.008-3.167a3.226,3.226,0,0,1,3.008,3.167,1.865,1.865,0,0,0,.578,1.584,2.621,2.621,0,0,0,1.851.339,1.593,1.593,0,0,1,1.157.113,2.869,2.869,0,0,1,.463,2.036,3.143,3.143,0,0,0,.81,2.376,4.362,4.362,0,0,0,3.355.679,3.437,3.437,0,0,1,2.083.339c0.231,0.226,0.347,0.792,0,2.263A9.451,9.451,0,0,1,35.619,19a1.2,1.2,0,0,0-.579,1.244c0.116,0.566.579,0.792,2.546,1.584l0.578,0.226a2.824,2.824,0,0,1,1.967,1.81c0.231,2.149-4.512,5.543-6.017,6.674-1.157,1.018-1.851,2.149-1.735,3.168',
    
    /**
     * Mugwort (Gråbo) - Artemisia
     * Finely divided, feathery leaves with multiple segments
     */
    'Gråbo': 'M40.629,28.269a2.67,2.67,0,0,0-2.25-1.079c-2.85.617-4.351,0-6.451-2.775,0.9,0,1.5-.154,2.25-0.154,1.8,0.154,3.151-.771,3.3-2.312a2.441,2.441,0,0,0-1.8-2.775c-1.65-.308-2.7.617-3.3,2.158a2.42,2.42,0,0,1-1.35,1.387c-1.5.154-3.151,0-4.951,0,0.9-1.7,1.65-3.083,2.4-4.471,0.9-1.542,1.5-3.392,3.751-3.854,1.65-.308,2.4-2.621,1.95-4.163a2.991,2.991,0,0,0-3.751-2.158,3.831,3.831,0,0,0-2.4,5.4c0.9,2.158-.3,3.238-1.5,4.779a27,27,0,0,1-1.8-6.013c-0.3-1.85-.45-3.854,1.5-5.4,1.5-1.233,1.65-3.238,1.05-5.088A2.625,2.625,0,0,0,23.676.21c-1.8.925-2.85,4.779-1.65,6.321,1.5,1.7.9,3.392,0.45,5.4-1.05-.925-2.25-1.387-2.7-2.313-1.05-2.621-1.95-3.392-4.5-3.083-1.5.154-2.85,0.771-3,2.467a3.868,3.868,0,0,0,2.1,4.317c0.9,0.462,2.4-.154,3.6-0.308,0.45-.154,0.9-0.771,1.35-0.617,1.65,0,4.2,2.158,4.651,3.854,0.3,1.233.9,2.313,1.2,3.392a1.1,1.1,0,0,1,.15.925c-0.9,1.85-1.95,3.7-3,5.7a0.883,0.883,0,0,1-.6-0.154c-0.15-1.7-.6-3.546-0.3-5.242,0.3-2.158-.3-3.7-2.25-4.317a2.755,2.755,0,0,0-3.6,2,3.459,3.459,0,0,0,2.7,4.317,3.432,3.432,0,0,1,1.5,1.079,2.287,2.287,0,0,0-.3.617,14.8,14.8,0,0,1-2.55.463c-1.65,0-3.3.154-3.9-2.313-0.3-1.387-1.8-1.7-3.151-1.233a3.16,3.16,0,0,0-1.65,4.009,2.5,2.5,0,0,0,3.15,1.541,8.3,8.3,0,0,1,1.8-.617c2.25,0,4.351.308,6.751,0.462,0.9,2.313-.15,6.013-2.7,8.634a53.692,53.692,0,0,1-1.95-5.242,3.011,3.011,0,0,0-4.2-1.7A3.5,3.5,0,0,0,9.424,31.2c-0.15,1.542,1.65,2.467,3.451,2.312,0.45,0,.9-0.154,1.2-0.154,1.8,3.083,2.4,5.859.45,8.942a22.462,22.462,0,0,0-2.1,5.242,12.585,12.585,0,0,0-.45,2.313c0.15,0,.3.154,0.45,0.154a9.871,9.871,0,0,0,1.5-2c0.9-2.467,2.1-4.163,5.1-4.008a34.755,34.755,0,0,0,5.551-.925,4.255,4.255,0,0,0,3.151-3.392,2.69,2.69,0,0,0-2.1-2.929,2.6,2.6,0,0,0-3.3,2c-0.75,3.238-3.3,2.621-5.4,3.392a76.532,76.532,0,0,1,3.6-8.017,3.829,3.829,0,0,1,6.151-.925,3.15,3.15,0,0,0,4.351,0c1.5-1.079,2.1-3.238,1.35-4.471-1.05-2.158-4.2-2.467-5.1-.462-1.05,2.467-2.7,1.85-4.651,1.542,0.6-1.079.9-2,1.5-2.929,0.45-.771.9-1.85,1.5-1.85,1.5-.154,3.45-0.463,4.651.308,2.4,1.542,4.351,3.854,6.6,5.7a3.793,3.793,0,0,0,2.85.463,2.13,2.13,0,0,0,.9-3.238m-11.1-16.5a5.244,5.244,0,0,1,1.8-1.85c0.15-.154,1.05.771,1.95,1.542a17.734,17.734,0,0,1-2.55,1.542,1.907,1.907,0,0,1-1.2-1.233m-12-2a22.851,22.851,0,0,1-1.8,2.158c-0.45-.771-1.05-1.387-1.5-2.158,0.6-.463,1.35-0.925,2.1-1.542a16.871,16.871,0,0,1,1.2,1.542m5.551-4.163c0.45-1.387.9-2.621,1.35-4.008,1.5,2.158,1.05,3.392-1.35,4.008m-5.1,15.725c-0.15-.771-0.3-1.7-0.45-2.467,0.45,0,1.05-.154,1.5-0.154,0.15,0.771,0.15,1.7,0.3,2.467a4.047,4.047,0,0,0-1.35.154m11.7,7.709c0.3,0.308,1.05.771,0.9,1.079-0.15,1.233-.9,1.85-3,1.7,0.9-1.233,1.5-2,2.1-2.775',
    
    /**
     * Grass (Gräs) - Poaceae
     * Simple blade-like leaves with parallel veins
     */
    'Gräs': 'M31.248,0.017A28.864,28.864,0,0,0,29.072,4.8c-1.33,3.467-1.814,7.531-2.419,11.6-0.242,2.032-.6,4.064-0.967,6.1a128.479,128.479,0,0,0-.726,26.538c-1.33.358-2.66,0.6-3.99,0.956a153.534,153.534,0,0,1,2.418-27.614,96.532,96.532,0,0,1,2.781-12.313c0.6-1.913,1.209-3.825,1.935-5.5A9.931,9.931,0,0,1,31.248.017M9,24.284a4.555,4.555,0,0,1,1.693,2.271,41.92,41.92,0,0,1,2.66,9.085,57.328,57.328,0,0,1,1.572,14.106H12.868A51.034,51.034,0,0,0,12.022,36,50.505,50.505,0,0,0,9,24.284m5.2-12.91c1.33,0.717,2.177,2.271,2.9,3.706a32.051,32.051,0,0,1,1.693,4.782A29.261,29.261,0,0,1,20,16.394a6.923,6.923,0,0,1,1.814-2.869,70.794,70.794,0,0,0-2.056,7.651,4.2,4.2,0,0,0-.242,1.2,3.012,3.012,0,0,0,.242.837A91.34,91.34,0,0,1,21.937,35.4a81.9,81.9,0,0,1,.484,14.464c-1.209,0-2.418-.119-3.628-0.239,1.33-6.455.967-14.823-.121-21.278a86.687,86.687,0,0,0-1.209,21.278H15.045A114.3,114.3,0,0,1,17.7,25.6c0.121-.478.242-1.076,0.363-1.434,0-.239-0.121-0.6-0.121-0.837a45.9,45.9,0,0,0-1.33-5.858c-0.846-2.152-1.693-4.064-2.418-6.1M27.5,24.045c0-.12.121-0.12,0,0a4.1,4.1,0,0,1,1.693,2.271,18.244,18.244,0,0,1,.967,2.271l0.363-.359a10.454,10.454,0,0,1,7.5-4.184,57.981,57.981,0,0,1,2.539-8.129,4.866,4.866,0,0,1,1.451-2.032c-0.726,2.63-1.693,5.26-2.176,8.009-0.6,2.869-1.088,5.738-1.451,8.726a82.7,82.7,0,0,0-.846,19.126H35.118a119.087,119.087,0,0,1,3.023-25.7c-3.386,1.076-5.562,3.706-7.013,6.933a71.35,71.35,0,0,1,2.66,18.529h-2.3a59.748,59.748,0,0,0-1.33-16.5C28.588,37.553,28.1,43.171,28.1,49.268H24.356c0.363-7.77,1.935-14.465,5.079-19.6A38.45,38.45,0,0,0,27.5,24.045',
    
    /**
     * Hazel (Hassel) - Corylus
     * Round to heart-shaped leaves with double-serrated edges
     */
    'Hassel': 'M36.525,36.419c-2.725,2.5-6.813,3.689-11.645,3.451-9.787-.476-15.237-6.308-14.866-15.948C10.262,16.187,14.1,7.38,18.934,3.1A10.474,10.474,0,0,1,26.367,0c8.548,0.357,14.99,14.163,14.618,25.231-0.248,4.88-1.734,8.569-4.46,11.187M20.049,4.166C15.465,8.332,12,16.663,11.625,23.8,11.254,35.11,18.562,37.728,24.88,38.085c4.336,0.238,7.8-.833,10.282-2.975s3.84-5.475,3.84-10C39.374,14.758,33.428,1.905,26.119,1.548c-1.858-.119-3.964.833-6.07,2.618m5.327,45.106-1.487.714c-3.469-6.189-1.486-14.044.743-22.494,2.23-8.926,4.708-18.209.867-26.54l1.61-.6c3.964,8.807,1.487,18.328-.867,27.611-1.982,7.974-3.964,15.591-.867,21.3m2.973-34.633L17.2,7.141l0.991-1.309,10.034,6.784L35.163,6.07,36.4,7.26Zm10.53,0.119L26.862,23.089,12.616,14.282l0.867-1.428,13.379,8.212,11.149-7.617Zm1.487,6.665L25.128,30.231l-14.494-8.45L11.5,20.352l13.627,7.974L39.5,20ZM39.5,31.063l-15.733,4.4L10.882,29.4l0.743-1.428,12.264,5.713L39,29.516Z',
    
    /**
     * Willow (Sälg och viden) - Salix
     * Long, narrow leaves with fine serrations
     */
    'Sälg och viden': 'M21.229,6.425a38.782,38.782,0,0,0-2.579,6.659c0,0.117-.112.234-0.112,0.35a34.066,34.066,0,0,0-0.9,16.823,12.743,12.743,0,0,0,0.561,2.22,30.466,30.466,0,0,0,6.391,11.448v5.257a0.786,0.786,0,1,0,1.57,0v-5.14a28.467,28.467,0,0,0,6.615-11.565c0.224-0.7,0.336-1.4,0.561-2.22a34.1,34.1,0,0,0-0.9-16.822,0.44,0.44,0,0,0-0.112-0.35,61.028,61.028,0,0,0-2.579-6.542,0.113,0.113,0,0,0-0.112-0.117A53.287,53.287,0,0,0,26.275,0.467,0.616,0.616,0,0,0,25.6,0a0.762,0.762,0,0,0-0.785,0.7,42.176,42.176,0,0,0-3.139,5.724c-0.337-0.117-0.337-0.117-0.449,0m9.531,7.126a14.465,14.465,0,0,1-4.6,8.294V14.836A16.363,16.363,0,0,0,29.19,9.229c0.561,1.4,1.121,2.921,1.57,4.323m1.009,16.355c-1.57,4.556-4.149,6.425-5.606,7.126v-5.14c1.233-0.35,4.036-1.636,6.167-5.841-0.112,1.285-0.336,2.57-0.56,3.855m-7.176,0.117c-1.57-0.7-4.6-2.8-5.943-8.645a22.619,22.619,0,0,1,0.785-4.673,14.466,14.466,0,0,0,5.27,7.126Zm-5.382-0.117c-0.224-1.285-0.448-2.57-0.561-3.972a10.7,10.7,0,0,0,5.943,5.724V36.8c-1.458-0.7-3.924-2.57-5.382-6.892m13.006-8.645c-1.458,6.191-4.709,8.177-6.167,8.762V23.832a15.663,15.663,0,0,0,5.494-7.36,25.965,25.965,0,0,1,0.673,4.79m-6.055-9.229V3.271c0.673,1.168,1.345,2.453,1.906,3.622a15.141,15.141,0,0,1-1.906,5.14m-1.57-0.35a11.99,11.99,0,0,1-1.682-4.79c0.561-1.051,1.121-2.1,1.682-3.271v8.061Zm0,2.8v7.126a13.825,13.825,0,0,1-4.373-8.178c0.448-1.519,1.009-2.92,1.57-4.322a14.368,14.368,0,0,0,2.8,5.374m-3.027,22.2a15.258,15.258,0,0,0,3.027,1.986v2.687a21.384,21.384,0,0,1-3.027-4.673m4.6,4.907v-2.8A9.122,9.122,0,0,0,29.3,36.8a36.4,36.4,0,0,1-3.139,4.79'
  };