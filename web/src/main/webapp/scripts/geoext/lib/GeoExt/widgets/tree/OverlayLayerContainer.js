/**
 * Copyright (c) 2008-2009 The Open Source Geospatial Foundation
 * 
 * Published under the BSD license.
 * See http://svn.geoext.org/core/trunk/geoext/license.txt for the full text
 * of the license.
 */

/**
 * @requires GeoExt/widgets/tree/LayerContainer.js
 */
Ext.namespace("GeoExt.tree");

/** api: (define)
 *  module = GeoExt.tree
 *  class = OverlayLayerContainer
 */

/** api: (extends)
 * GeoExt/widgets/tree/LayerContainer.js
 */

/** api: constructor
 * .. class:: OverlayLayerContainer
 * 
 *     A layer container that will collect all overlay layers of an OpenLayers
 *     map. Only layers that have displayInLayerSwitcher set to true will be
 *     included.
 * 
 *     To use this node type in ``TreePanel`` config, set nodeType to
 *     "gx_overlaylayerontainer".
 */
GeoExt.tree.OverlayLayerContainer = Ext.extend(GeoExt.tree.LayerContainer, {

    /** private: method[constructor]
     *  Private constructor override.
     */
    constructor: function(config) {
        config = Ext.applyIf(config || {}, {
            text: "Overlays"
        });
        config.loader = Ext.applyIf(config.loader || {}, {
            filter: function(record){
                var layer = record.get("layer");
                return layer.displayInLayerSwitcher === true &&
                layer.isBaseLayer === false;
            }
        });
        
        GeoExt.tree.OverlayLayerContainer.superclass.constructor.call(this,
            config);
    }
});

/**
 * NodeType: gx_overlaylayercontainer
 */
Ext.tree.TreePanel.nodeTypes.gx_overlaylayercontainer = GeoExt.tree.OverlayLayerContainer;